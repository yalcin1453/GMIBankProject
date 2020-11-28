package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import utilities.ConfigurationReader;

import java.util.List;

import static io.restassured.RestAssured.given;

public class DeleteInfoStepDef {
    Response responseBeforeDelete;
    JsonPath json;
    Response responseAfterDelete;
    int id = getRandomID();


    @Given("I send a GET request to REST API end point  {string}")
    public void i_send_a_GET_request_to_REST_API_end_point(String string) {
        //Surekli calismasi icin responsdan gelen Id leri surekli yenilemek icin  id uretildi
        string = "https://www.gmibank.com/api/tp-states/" + id;

        responseBeforeDelete = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(string);
//        responseBeforeDelete.prettyPrint();

//        System.out.println(responseBeforeDelete.getBody().asString());

        json = responseBeforeDelete.jsonPath();

    }

    @Then("Before delete request HTTP Status Code should be {string}")
    public void before_delete_request_HTTP_Status_Code_should_be(String string) {
        int expectedStatusCode = Integer.parseInt(string);
        responseBeforeDelete.then().
                assertThat().
                statusCode(expectedStatusCode);
    }

    @Then("Before delete request response format should be {string}")
    public void before_delete_request_response_format_should_be(String string) {
        Assert.assertEquals(string,responseBeforeDelete.getContentType());
//        System.out.println(responseBeforeDelete.getContentType());

    }

    @Then("Before delete request id should be {string}")
    public void before_delete_request_id_should_be(String string) {
        int actualId = json.getInt("id");
        int expectedId = Integer.parseInt(string);
        //Surekli calismasi icin responsdan gelen Id leri surekli yenilemek icin  id uretildi
        expectedId = id;
//        System.out.println("Actual id: " + actualId);
//        System.out.println("Expected id: " + expectedId);
        Assert.assertEquals(expectedId,actualId);

    }

    @Then("Before delete request name should be {string}")
    public void before_delete_request_name_should_be(String string) {
        String actualName = json.getString("name");
//        System.out.println("Actual name: " + actualName);
        string = getRandomState();
        Assert.assertEquals(string,actualName);
    }

    @Given("I send a DELETE request to REST API end point  {string}")
    public void i_send_a_DELETE_request_to_REST_API_end_point(String endpointUrl) {
        endpointUrl = "https://www.gmibank.com/api/tp-states/" + id;
        responseAfterDelete = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                delete(endpointUrl);
        responseAfterDelete.prettyPrint();

        System.out.println("After Delete Response Body: " + responseAfterDelete.getBody().asString());

        json = responseAfterDelete.jsonPath();
    }

    @Then("After delete request HTTP Status Code should be {string}")
    public void after_delete_request_HTTP_Status_Code_should_be(String string) {
        int expectedStatusCode = Integer.parseInt(string);
        int actualStatusCode = responseAfterDelete.statusCode();
        Assert.assertEquals(actualStatusCode,expectedStatusCode);
    }

    @Then("After delete request response format should be {string}")
    public void after_delete_request_response_format_should_be(String string) {
        String actualContentType= responseAfterDelete.getContentType();
        Assert.assertEquals(actualContentType,"");

    }

    @Then("After delete request response after delete should contain nothing")
    public void after_delete_request_response_after_delete_should_contain_nothing() {
        Assert.assertTrue(responseAfterDelete.getBody().asString().isEmpty());
    }

    public int getRandomID() {
        String endPoint = "https://www.gmibank.com/api/tp-states";
        Response responseBeforeDelete = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endPoint);
        JsonPath json =responseBeforeDelete.jsonPath();
        List<Integer> allStatesId = json.getList("id");
        int randomIndex = (int) (Math.random()*15);
        return allStatesId.get(randomIndex);
    }

    public String getRandomState() {
        String endPoint = "https://www.gmibank.com/api/tp-states/" + id;
        Response responseBeforeDelete = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endPoint);
        JsonPath json =responseBeforeDelete.jsonPath();
        return json.getString("name");
    }


}
