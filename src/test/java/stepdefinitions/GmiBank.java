package stepdefinitions;

import Pojos.Customer;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import utilities.ConfigurationReader;
import utilities.WriteToTxt;

import java.io.IOException;
import java.util.Arrays;

import static io.restassured.RestAssured.given;

public class GmiBank {

Response response;
Customer customer[];

    @Given("user provides api end point to set the response using {string}")
    public void user_provides_api_end_point_to_set_the_response_using(String string) {


    }

    @Given("manipulate all customers' data")
    public void manipulate_all_customers_data() throws IOException {




    }

    @Given("user sets the data in correspondent files")
    public void user_sets_the_data_in_correspondent_files() {

    }

    @Then("user validates all data")
    public void user_validates_all_data() {

    }












}
