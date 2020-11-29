package stepdefinitions;

import pojos.Country;
import pojos.Customer;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import utilities.DatabaseUtility;
import utilities.PDFGenerator;

import java.util.ArrayList;
import java.util.List;

public class PrintPdfStepDef {
    List<Object> list;
    List<Object> allSSNs = new ArrayList<>();
    List<String> listOfCurrentSSNs = new ArrayList<>();

    @Given("user creates a connection with db using {string} , {string} and {string}")
    public void user_creates_a_connection_with_db_using_and(String port, String username, String password) {
        DatabaseUtility.createConnection(port, username, password);
    }

    @When("user reads the customers data using {string} and {string}")
    public void user_reads_the_cuatomers_data_using_and(String query, String column) {
        allSSNs = DatabaseUtility.getColumnData(query, column);
        for (int i = 0; i < allSSNs.size(); i++) {
            System.out.println(allSSNs.get(i).toString());
            listOfCurrentSSNs.add(allSSNs.get(i).toString().trim());
        }
    }



    @Then("user prints all using pdf")
    public void user_prints_all_using_pdf() {
        String query = "Select * from tp_customer";
        List<Customer> cusList = new ArrayList<>();
        List<List<Object>> allObj = DatabaseUtility.getQueryResultList(query);
        for (int i = 0; i < 10; i++) {
            Customer customer = new Customer();
            Country country = new Country();
            System.out.println(allObj.get(i));
            System.out.println(allObj.get(i).get(14));
            customer.setFirstName(allObj.get(i).get(8).toString());
            customer.setSsn(allObj.get(i).get(5).toString());
            country.setName(allObj.get(i).get(8).toString());

            customer.setState(allObj.get(i).get(9).toString());
            System.out.println(allObj.get(i).get(9).toString());
            customer.setCountry(country);
            customer.setZipCode(allObj.get(i).get(7).toString());
            cusList.add(customer);
        }
        System.out.println(allObj);
        PDFGenerator.pdfGeneratorRowsAndCellsWithList(("All Applicants"), cusList, "Eagles04.pdf");

    }


}
