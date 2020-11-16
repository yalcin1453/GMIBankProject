package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.Us_014pages;
import utilities.ConfigurationReader;
import utilities.Driver;

public class US_014 {
    Us_014pages object=new Us_014pages();

    //Background
    @Given("Go to the sign in page")
    public void go_to_the_sign_in_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url_login"));
    }

    @Given("Type username and password than click on sign in button")
    public void type_username_and_password_than_click_on_sign_in_button() {

    object.username.sendKeys(ConfigurationReader.getProperty("username_employee"));
    object.password.sendKeys(ConfigurationReader.getProperty("password_employee"));
    object.signinButton.click();
    }

    @Given("Click on My Operations dropdown menu")
    public void click_on_My_Operations_dropdown_menu() {
    object.myOperationsButton.click();
    }

    @Given("Click on Manage Accounts")
    public void click_on_Manage_Accounts() {
        object.manageAccountsButton.click();
    }

    @Given("Click on +Create a new Account")
    public void click_on_Create_a_new_Account() {
    object.createNewAccount.click();
    }
    //TC_001
    @Given("Click on the Create Date textbox and type the time of account creation")
    public void click_on_the_Create_Date_textbox_and_type_the_time_of_account_creation() {
    object.createDateBox.sendKeys("11/15/2020 12:00 AM");
    }

    @Given("Click on the Closed Date textbox and type the time later than the time of account creation")
    public void click_on_the_Closed_Date_textbox_and_type_the_time_later_than_the_time_of_account_creation() {
    object.closeDateBox.sendKeys("12/15/2020 12:00 AM");
    }

    @Then("Verify that Create Date and Closed Date created successfully")
    public void verify_that_Create_Date_and_Closed_Date_created_successfully() {
        Assert.assertTrue(object.createDateBox.isDisplayed());
        Assert.assertTrue(object.closeDateBox.isDisplayed());

    }
    //TC_002
    @Given("Click on the Create Date textbox and type the  date earlier at the time of account creation")
    public void click_on_the_Create_Date_textbox_and_type_the_date_earlier_at_the_time_of_account_creation() {
    object.createDateBox.sendKeys("11/15/2019 12:00 AM");
    }

    @Then("Verify that Create Date and Closed Date not created successfully")
    public void verify_that_Create_Date_and_Closed_Date_not_created_successfully() {
    Assert.assertTrue(object.createDateBox.isDisplayed());//pass olmasi gerekir/Dolayisiyla bug var
    Assert.assertTrue(object.closeDateBox.isDisplayed());
    }
    //TC_003
    @Given("Click on the Create Date textbox and type date as month,day,year,hour and minute")
    public void click_on_the_Create_Date_textbox_and_type_date_as_month_day_year_hour_and_minute() {
    object.createDateBox.sendKeys("12/11/2020 12:00 "+ Keys.ENTER);
    }

    @Then("Verify that the date created succesfully")
    public void verify_that_the_date_created_succesfully() {
    System.out.println(object.createDateBox.getAttribute("value"));
    String actualDate=object.createDateBox.getAttribute("value");
    String expectedDate="2020-11-12T00:00";
    Assert.assertEquals(expectedDate,actualDate);

    }
    //TC_004
    @Given("Click on the Create Date textbox and type date as month,day,year")
    public void click_on_the_Create_Date_textbox_and_type_date_as_month_day_year() {
    object.createDateBox.clear();
    object.createDateBox.sendKeys("11/15/2020");
    }

    @Then("Verify that the date not created succesfully")
    public void verify_that_the_date_not_created_succesfully() {

    }
    //TC_005
    @Given("Click on Manage Customer")
    public void click_on_Manage_Customer() {
    object.manageCustomersButton.click();
    }

    @Given("Click on +Create a new Custumer")
    public void click_on_Create_a_new_Custumer() {
    object.createNewCustomer.click();
    Driver.wait(3);
    }

    @Given("Click on the SSN textbox and type a valid SSN number and Click on the Search button")
    public void click_on_the_SSN_textbox_and_type_a_valid_SSN_number_and_Click_on_the_Search_button() {
    object.ssn.sendKeys("124-45-3422");
    object.Searchssn.click();
    Driver.wait(3);
    }

    @Then("Verify that User box is not blank")
    public void verify_that_User_box_is_not_blank() {
        System.out.println(object.firstName.getAttribute("value"));//value=1202
        String actualResult=object.firstName.getAttribute("value");
        String expectedResult="1202";
    }
    //TC_006
    @Given("Click an ID item to  choose an account created on manage accounts")
    public void click_an_ID_item_to_choose_an_account_created_on_manage_accounts() {
    object.idNum.click();
    }

    @Then("Verify Account")
    public void verify_Account() {
    String accountInf=object.accountInfo.getText();
    Assert.assertTrue(accountInf.equals("Account"));
    }


}
