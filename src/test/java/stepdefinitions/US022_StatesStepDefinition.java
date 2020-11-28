package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import utilities.ConfigurationReader;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class US022_StatesStepDefinition {

    Response response;
    JsonPath json;
    List<Map<String, Object>> allStatesData;
    @Given("user gets all data for states using api end point {string}")
    public void user_gets_all_data_for_states_using_api_end_point(String url) {
        response = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(url);
        response.then().
                assertThat().statusCode(200);
        //  response.prettyPrint();
        json = response.jsonPath();
    }

    @Given("user deserializes states data as json to java pojo")
    public void user_deserializes_states_data_as_json_to_java_pojo() {
        allStatesData=json.getList("$");
        System.out.println(allStatesData);

        System.out.println(allStatesData.size());

        System.out.println(allStatesData.get(80).get("name").toString());
    }

    @Then("user validates the data for states")
    public void user_validates_the_data_for_states() {

        String expectedStateName="Helsinki";
        String actualCountryName= allStatesData.get(80).get("name").toString();
        Assert.assertEquals(expectedStateName,actualCountryName);

        String expectedId = "21559";
        String actualId = allStatesData.get(1).get("id").toString();
        Assert.assertEquals(expectedId,actualId);
    }
}
