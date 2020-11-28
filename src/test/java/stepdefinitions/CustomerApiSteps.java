package stepdefinitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import pojos.Customer;
import utilities.ConfigurationReader;
import utilities.ReadTxt;
import utilities.WriteToTxt;

import java.io.IOException;
import java.util.List;

import static io.restassured.RestAssured.given;

public class CustomerApiSteps {
    Response response;
    Customer[] customers;

    @Given("user provides the api end point to set the response using {string}")
    public void user_provides_the_api_end_point_to_set_the_response_using(String url) {
        response = given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("api_bearer_token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .get(url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
        response.prettyPrint();

    }

    @Given("manipulate all customers' data")
    public void manipulate_all_customers_data() throws IOException {
        ObjectMapper obj=new ObjectMapper();
         customers=obj.readValue(response.asString(),Customer[].class);
         for(int i=0;i<customers.length;i++)
        if(customers[i].getFirstName()!=null)
            System.out.println(customers[i].getFirstName());

    }

    @Given("user sets the data in correspondent files")
    public void user_sets_the_data_in_correspondent_files() {
        WriteToTxt.saveDataFileWithAllCustomerInfo(ConfigurationReader.getProperty("filePath_All_Customer_Data"),customers);
        WriteToTxt.saveDataInFile("NewFile.txt ",customers);
    }

    @Then("user validates all data")
    public void user_validates_all_data() {
       List<Customer> list= ReadTxt.returnCustomerSNN("/Users/apple/IdeaProjects/MeetSizeProject/GMIBankProject/NewFile.txt ");

       for(int i=0;i<list.size();i++){
           System.out.println(list.get(i).getSsn());
       }
       boolean isdisplay=list.contains("107-10-7107");
       Assert.assertTrue(isdisplay);
    }


}
