package stepdefinitions;

import Pojos.Country;
import Pojos.Customer;
import Pojos.States;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import utilities.ConfigurationReader;
import utilities.PDFGenerator;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static io.restassured.RestAssured.given;
@JsonIgnoreProperties(ignoreUnknown = true)
public class PrintPdfApiStepDef {
    Response response;
    Customer[] customerApi;
    Country country;


    @Given("user provides api end point to set the response {string}")
    public void user_provides_api_end_point_to_set_the_response(String url) {
        response = given().contentType(ContentType.JSON).auth()
                .oauth2(ConfigurationReader.getProperty("token"))
                .when().get(url);
       response.prettyPrint();
    }

    @Given("user should print the data  as pdf")
    public void user_should_print_the_data_as_pdf() throws IOException {
        ObjectMapper obj = new ObjectMapper();
        customerApi = obj.readValue(response.asString(), Customer[].class);
        List<Customer> customerList = new ArrayList<>();

        for (int i = 0; i < customerApi.length; i++) {
            Customer customer = new Customer();
            country = new Country();

            customer.setFirstName(customerApi[i].getFirstName());
            customer.setSsn(customerApi[i].getSsn());
            customer.setZipCode(customerApi[i].getZipCode());
            customer.setState(customerApi[i].getState());
            country.setName("USA");
            customer.setCountry(country);
            customerList.add(customer);




        }
        PDFGenerator.pdfGeneratorRowsAndCellsWithList(("All Applicants"), customerList, "EaglesApi06.pdf");


    }


}















