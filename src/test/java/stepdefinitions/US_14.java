package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.ui.Select;
import pages.Userstory14;
import utilities.ConfigurationReader;
import utilities.Driver;

public class US_14 {
    Userstory14 object=new Userstory14();

    @Given("User go to the sign in page")
    public void user_go_to_the_sign_in_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url_login"));
    }

    @When("User type username and password than click on sign in button")
    public void user_type_username_and_password_than_click_on_sign_in_button() {
    object.username.sendKeys(ConfigurationReader.getProperty("username_employee"));
    object.password.sendKeys(ConfigurationReader.getProperty("password_employee"));
    object.signinButton.click();
    }

    @When("User click on {string} dropdown menu")
    public void user_click_on_dropdown_menu(String string) {
        Select option=new Select(object.myOperationsButton);
        option.selectByIndex(1);
    }

    @Then("User click on {string}")
    public void user_click_on(String string) {

    }

    @When("User Click on the Create Date textbox and type the time of account creation")
    public void user_Click_on_the_Create_Date_textbox_and_type_the_time_of_account_creation() {

    }

    @Then("User click on the Closed Date textbox and type the time later than the time of account creation")
    public void user_click_on_the_Closed_Date_textbox_and_type_the_time_later_than_the_time_of_account_creation() {

    }

    @When("User click on the Create Date textbox and type the date earlier at the time of account creation")
    public void user_click_on_the_Create_Date_textbox_and_type_the_date_earlier_at_the_time_of_account_creation() {

    }

    @When("Click on the Create Date textbox")
    public void click_on_the_Create_Date_textbox() {

    }

    @Then("type date as month,day,year,hour and minute")
    public void type_date_as_month_day_year_hour_and_minute() {

    }

    @When("User writes the date as month,day,year")
    public void user_writes_the_date_as_month_day_year() {

    }

    @Then("type date as month,day,year")
    public void type_date_as_month_day_year() {

    }

    @Given("User Click on {string}")
    public void user_Click_on(String string) {

    }

    @Given("Click on {string}")
    public void click_on(String string) {

    }

    @Given("Click on the {string} textbox and type a valid SSN number and Click on the Search button")
    public void click_on_the_textbox_and_type_a_valid_SSN_number_and_Click_on_the_Search_button(String string) {

    }

    @Then("User textbox should not be blank")
    public void user_textbox_should_not_be_blank() {

    }

    @Then("Click an ID item to choose an account created on manage accounts")
    public void click_an_ID_item_to_choose_an_account_created_on_manage_accounts() {

    }

    @When("User click on the {string} textbox and type a valid SSN number and Click on the Search button")
    public void user_click_on_the_textbox_and_type_a_valid_SSN_number_and_Click_on_the_Search_button(String string) {

    }

    @Then("User click in Zelle Enrolled radio button ,click save button")
    public void user_click_in_Zelle_Enrolled_radio_button_click_save_button() {

    }


}
