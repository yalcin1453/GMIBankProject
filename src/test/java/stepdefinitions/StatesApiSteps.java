package stepdefinitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import jsonModels.StateJson;
import org.junit.Assert;
import pojos.States;
import utilities.ConfigurationReader;

import java.io.IOException;
import java.util.List;

import static io.restassured.RestAssured.given;

public class StatesApiSteps {
    Response response;
    States[] states;
    String filePath="AllStatesData.txt";

    @Given("user sets  states to response using {string}")
    public void user_sets_states_to_response_using(String url) {
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

    @Given("user deserializes all states to pojo")
    public void user_deserializes_all_states_to_pojo() throws IOException {
        ObjectMapper obj=new ObjectMapper();
        states=obj.readValue(response.asString(),States[].class );
        System.out.println(states[0].getName());
    }

    @Given("user generates all states data in correspondent files")
    public void user_generates_all_states_data_in_correspondent_files() {
        WriteToTxt.saveAllStates(filePath,states);
    }

    @Then("user validates data for all states")
    public void user_validates_data_for_all_states() {
    List<States> list= ReadTxt.returnAllStates(filePath);
    String expected="Franche-Comte ";
        System.out.println(list.get(5).getName());
        Assert.assertEquals(expected,list.get(5).getName());
    }
    @Given("user creates a new state using {string}")
    public void user_creates_a_new_state_using(String endPoint) {
        response = given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("api_bearer_token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when().body(StateJson.CREATE_STATE)
                .post(endPoint)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
        response.prettyPrint();
    }

    @Given("user provides api end point to delete states using {string} and its extension {string}")
    public void user_provides_api_end_point_to_delete_states_using_and_its_extension(String endPoint, String id) {
        response = given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("api_bearer_token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .delete(endPoint+id)
                .then()
                .extract()
                .response();
        response.prettyPrint();
    }
    }





