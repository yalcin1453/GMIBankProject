package stepdefinitions;


import pojos.AccountRegistration;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.path.json.JsonPath;
import io.restassured.response.*;
import org.junit.Assert;
import pojos.Customer;
import utilities.ConfigurationReader;
import utilities.WriteToTxt;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class ApplicantDataValidationStepDef {

    Response response;
    ObjectMapper obj;
    AccountRegistration [] accountRegistration;
    List<Map<String,Object>> applicantList ;
    JsonPath json;
    int i;


    @Given("user provides api end point and set the response using {string}")
    public void user_provides_api_end_point_and_set_the_response_using(String url) {
        response= given().
                header("Authorization", "Bearer " + ConfigurationReader.getProperty("token")).
                when().get(url).
                then().extract().response();
    }

    @Given("User manipulates all the applicants data")
    public void user_manipulates_all_the_applicants_data() throws IOException {
       // response.prettyPrint();
        json= response.jsonPath();
        obj = new ObjectMapper();
        accountRegistration = obj.readValue(response.asString(),AccountRegistration[].class);

        for (int i=0; i<accountRegistration.length; i++){
            if(accountRegistration[i] !=null){
               System.out.println(accountRegistration[i].getId()+" "+accountRegistration[i].getFirstName()+" "+accountRegistration[i].getLastName());
            }
        }
    }

//    @Given("User sets the data in correspondent file")
//    public void user_sets_the_data_in_correspondent_file() {
//        WriteToTxt.saveDataInFile("NewFile1.txt",);
//    }

    @Then("User validates all the data")
    public void user_reads_all_the_data() throws Exception {

        response.then().assertThat().statusCode(200);

        int actualAccountNum = accountRegistration.length;
        int expectedAccountNum=889;
        Assert.assertTrue(actualAccountNum==expectedAccountNum);

        String actualFirstName=accountRegistration[0].getFirstName();
        int actualfirstID=accountRegistration[0].getId();

        Assert.assertTrue(actualFirstName.equals("example"));
        Assert.assertTrue(actualfirstID==1251);

        applicantList = json.getList("$");
        System.out.println(applicantList.get(1));
        System.out.println(applicantList.get(applicantList.size()-1).get("id"));
        System.out.println(applicantList.get(applicantList.size()-1).get("firstName"));

    }
    }
