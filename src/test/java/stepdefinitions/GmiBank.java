package stepdefinitions;

import Pojos.Customer;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.response.Response;

import java.io.IOException;

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
