package stepdefinitions;

import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import utilities.ConfigurationReader;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class DeleteCustomerInfoSteps {

    Response response;
    JsonPath json;
    @Given("use api  end point {string}")
    public void use_api_end_point(String endPoint) {
       response=given().
                    accept(ContentType.JSON).
                    auth().oauth2(ConfigurationReader.getProperty("token")).
               when().
                    get(endPoint);
       response.then().
               assertThat().
               statusCode(200);
       response.prettyPrint();
       json=response.jsonPath();
    }

    @Given("get first customers information  as De-Serialization")
    public void get_first_customers_information_as_De_Serialization() {
        List<Map<String,Object>>allCustomerInfo=json.getList("$");
        System.out.println(allCustomerInfo.get(0).get("firstName"));
    }

    @Given("verify first customer's lastName {string} is deleted")
    public void verify_first_customer_s_lastName_is_deleted(String string) {
        String deleteRequest="firstName";
        response=given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                delete("firstname");
    }


}
