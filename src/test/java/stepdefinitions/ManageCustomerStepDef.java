package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.ui.Select;
import pages.ManageCustomerPage;
import utilities.Driver;

public class ManageCustomerStepDef {
       ManageCustomerPage us_12= new ManageCustomerPage();

    @Given("user at customer create page")
    public void user_at_customer_create_page() {
us_12.myOperation.click();
us_12.manageCustomers.click();
us_12.newCustomer.click();

    }

    @When("user enter {string} number")
    public void user_enter_number(String string) {
us_12.ssnTextBox.sendKeys(string);

    }

    @When("user enter firstname {string}")
    public void user_enter_firstname(String string) {
us_12.firstNameTextBox.sendKeys(string);

    }

    @When("user enter lastname {string}")
    public void user_enter_lastname(String string) {
us_12.lastNameTextBox.sendKeys(string);
    }

    @When("user enter middle {string}")
    public void user_enter_middle(String string) {
us_12.middleName.sendKeys(string);
    }

    @When("user enter email {string}")
    public void user_enter_email(String string) {
us_12.email.sendKeys(string);
    }

    @When("user enter phone {string}")
    public void user_enter_phone(String string) {
us_12.phoneNumber.sendKeys(string);
    }

    @When("user enter mobile {string}")
    public void user_enter_mobile(String string) {
us_12.mobileNumber.sendKeys(string);
    }

    @When("user enter zipcode {string}")
    public void user_enter_zipcode(String string) {
us_12.zipCode.sendKeys(string);
    }

    @When("user enter address {string}")
    public void user_enter_address(String string) throws InterruptedException {
Thread.sleep(3000);
        us_12.address.sendKeys(string);

    }

    @When("user enter city {string}")
    public void user_enter_city(String string) {
us_12.userBoxCity.sendKeys(string);
    }

    @When("user enter ssn {string}")
    public void user_enter_ssn(String string) {
us_12.getSsnTextBox.sendKeys(string);
    }

    @When("user enter create date {string}")
    public void user_enter_create_date(String string) {
us_12.date.sendKeys(string);
    }

    @When("user enter country {string}")
    public void user_enter_country(String string) {
        Driver.selectRandomTextFromDropdown(new Select(us_12.countryDropDown));


    }

    @When("user enter state {string}")
    public void user_enter_state(String string) {
us_12.stateBox.sendKeys(string);
    }

    @When("user enter user {string}")
    public void user_enter_user(String string) {
us_12.userBox.sendKeys(string);
    }

    @When("user account scrolldown")
    public void user_account_scrolldown() {
us_12.account.click();
    }

    @When("user enter click checkbox checkin account")
    public void user_enter_click_checkbox_checkin_account() {

    }

    @When("user click save button")
    public void user_click_save_button() {
     us_12.saveButton.click();
    }















}
