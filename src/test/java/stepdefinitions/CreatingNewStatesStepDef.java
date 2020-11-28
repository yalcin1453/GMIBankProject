package stepdefinitions;

import Pojos.States;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import jsonModels.stateJson;
import org.junit.Assert;
import utilities.ConfigurationReader;

import java.io.IOException;
import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;

public class CreatingNewStatesStepDef {

    Response response;
    States[] states;
    String filepath = "statedata.txt";


    @Given("User provides api end point and set the response using {string}")
    public void user_provides_api_end_point_and_set_the_response_using(String url) {

        response = given().
                header("Authorization", "Bearer " + ConfigurationReader.getProperty("token")).
                when().get(url).
                then().extract().response();

        //   response.prettyPrint();

    }

    @Given("User retrieves all created states")
    public void user_retrieves_all_created_states() throws IOException {
        ObjectMapper obj = new ObjectMapper();
        states = obj.readValue(response.asString(), States[].class);
        System.out.println(states[0].getName());
    }


    @Given("User puts the data in correspondent file")
    public void user_puts_the_data_in_correspondent_file() {

        //WriteToTxt.saveAllStates(filepath,states);
    }


    @Then("User validates data for all states")
    public void user_validates_data_for_all_states() {
        List<States> list = ReadTxt.returnAllStates(filepath);
        System.out.println("Number of states before creating a new one: " + list.size());
        System.out.println(list.get(0).getName());
        String expected = "Auvergne ";
        Assert.assertEquals(expected, list.get(0).getName());
    }

    @Given("user creates a new state using {string}")
    public void user_creates_a_new_state_using(String url) {
        response = given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when().body(stateJson.CREATE_STATE2)
                .post(url)
                .then()
                .contentType(ContentType.JSON).statusCode(201)
                .extract()
                .response();
        response.prettyPrint();


    }


    }





