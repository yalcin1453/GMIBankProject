package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.LoginPage;
import pages.US_09;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class US_09StepDefinitions {

    LoginPage loginPage = new LoginPage();

    US_09 us_09 = new US_09();

    @Given("user should be landing page")
    public void user_should_be_landing_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }

    @Given("Click on account sign button")
    public void click_on_account_sign_button() {
        loginPage.accountSignButton.click();
    }

    @Given("Click on Sign in button")
    public void click_on_Sign_in_button() throws InterruptedException {
        loginPage.SignIn.click();
        Thread.sleep(10);
    }

    @Given("Click on username textbox and enter username")
    public void click_on_username_textbox_and_enter_username() throws InterruptedException {
        loginPage.username.sendKeys(" team2employee");
        Thread.sleep(10);
    }

    @And("Click on password textbox and enter password and click signin button")
    public void clickOnPasswordTextboxAndEnterPasswordAndClickSigninButton() throws InterruptedException {
        loginPage.password.sendKeys(" employeeteam2");
        Thread.sleep(10);
        loginPage.SignInButton.click();
    }

    @Given("Click on My Operations dropdown and Select Manage Customers")
    public void click_on_My_Operations_dropdown_and_Select_Manage_Customers() {
        Select select = new Select(us_09.manageCustomerButton);
        select.selectByVisibleText("Manage Customers");
    }

    @Given("Click on Create a new Customer")
    public void click_on_Create_a_new_Customer() {
        us_09.createNewCustomerButton.click();
    }

    @Given("Click on SSN textbox and enter valid SSN number")
    public void click_on_SSN_textbox_and_enter_valid_SSN_number() {
        us_09.SSNtextbox.sendKeys("123-12-1239");
    }

    @Given("Click on First Name textbox and enter first name")
    public void click_on_First_Name_textbox_and_enter_first_name() {
       us_09.firstNameTextBox.sendKeys("Micheal");
    }

    @Given("Click on Last Name textbox and enter last name")
    public void click_on_Last_Name_textbox_and_enter_last_name() {
        us_09.lastNameTextBox.sendKeys("Hamilton");
    }

    @Given("Click on Middle Initial textbox and enter middle initial")
    public void click_on_Middle_Initial_textbox_and_enter_middle_initial() {
        us_09.middleInitialTextBox.sendKeys("A");
    }

    @Given("Click on Email textbox and enter email")
    public void click_on_Email_textbox_and_enter_email() {
        us_09.emailTextBox.sendKeys("test123@gmail.com");
    }

    @Given("Click on Mobile Phone Number textbox and enter mobile phone number")
    public void click_on_Mobile_Phone_Number_textbox_and_enter_mobile_phone_number() {
        us_09.mobilePhoneTextBox.sendKeys("123-123-1221");
    }

    @Given("Click on Phone Number textbox and enter phone number")
    public void click_on_Phone_Number_textbox_and_enter_phone_number() {
        us_09.phoneTextBox.sendKeys("123-456-6789");
    }

    @Given("Click on Zip Code textbox and enter zip code")
    public void click_on_Zip_Code_textbox_and_enter_zip_code() {
        us_09.zipCodeTextBox.sendKeys("10001");
    }

    @Given("Click on Adress textbox and enter adress")
    public void click_on_Adress_textbox_and_enter_adress() {
        us_09.adressTextBox.sendKeys("34 street");
    }

    @Given("Click on City textbox and enter name of city")
    public void click_on_City_textbox_and_enter_name_of_city() {
        us_09.cityTextBox.sendKeys("Manhattan");
    }

    @Given("Click on Ssn textbox and enter valid SSN number")
    public void click_on_Ssn_textbox_and_enter_valid_SSN_number() {
        us_09.SsnTextBox.sendKeys("123-12-1239");
    }

    @Given("Click on Create Date textbox enter current date and time")
    public void click_on_Create_Date_textbox_enter_current_date_and_time() {
        DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
        Date date = new Date();
        String date1= dateFormat.format(date);
        us_09.createDateTextBox.sendKeys(date1);
    }

    @Given("Click on Country dropdown and select country")
    public void click_on_Country_dropdown_and_select_country() {
        Select select = new Select(us_09.countryDropdown);
        select.selectByValue("1");
    }

    @Given("Click on State textbox and enter name of state")
    public void click_on_State_textbox_and_enter_name_of_state() {
        us_09.stateTextBox.sendKeys("New York");

    }

    @Given("Click on User dropdown and select a user")
    public void click_on_User_dropdown_and_select_a_user() {
        Select select = new Select(us_09.userDropdown);
        select.selectByValue("1201");
    }

    @Given("Click on Account dropdown select an account")
    public void click_on_Account_dropdown_select_an_account() {
        Select select = new Select(us_09.accountDropdown);
        select.selectByValue("3979");
    }

    @Given("Click on Zelle Enrolled checkbox")
    public void click_on_Zelle_Enrolled_checkbox() {
        us_09.zelleCheckBox.click();
    }

    @Given("Click on Save button")
    public void click_on_Save_button() {
        us_09.saveButton.click();
    }

    @Given("Click on Create a new Customer button")
    public void click_on_Create_a_new_Customer_button() {
        us_09.createNewCustomerButton.click();
    }

    @Given("Click on SSN textbox and enter user SSN number")
    public void click_on_SSN_textbox_and_enter_user_SSN_number() {
        us_09.SSNtextbox.sendKeys(" 123-12-1239");
    }

    @Given("Click on Search button")
    public void click_on_Search_button() {
        us_09.searchButton.click();
    }

    @Then("verify user first name and last name displayed")
    public void verify_user_first_name_and_last_name_displayed() {
        String expectedfirstname = "Micheal";
        String expectedlastname = "Hamilton";

        Assert.assertEquals(expectedfirstname,us_09.firstNameTextBox.getText(),"First name succesfully");
        Assert.assertEquals(expectedlastname,us_09.lastNameTextBox.getText(),"Last name succesfully");
    }


}
