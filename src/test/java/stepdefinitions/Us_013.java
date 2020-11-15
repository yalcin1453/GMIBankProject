package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.ui.Select;
import pages.Us_013pages;
import utilities.Driver;

public class Us_013 {




  Us_013pages us_013= new Us_013pages();





    @When("user clicks my operations button")
    public void user_clicks_my_operations_button() {
      us_013.myOperations.click();

    }

    @When("user clicks  manage accounts button")
    public void user_clicks_manage_accounts_button() {
us_013.myAccounts.click();
    }

    @When("user clicks create new Account button")
    public void user_clicks_create_new_Account_button() {
us_013.createNewAccount.click();
    }

    @When("user enters description {string}")
    public void user_enters_description(String string) {
us_013.description.sendKeys(string);
    }

    @When("user enters balance    {string}")
    public void user_enters_balance(String string) {
us_013.balance.sendKeys(string);
    }

    @When("user selects account type  {string}")
    public void user_selects_account_type(String string) {
      Driver.selectRandomTextFromDropdown(new Select(us_013.accountType));
    }

    @When("user selects account status type {string}")
    public void user_selects_account_status_type(String string) {
Driver.selectRandomTextFromDropdown(new Select(us_013.accountStatusType));
    }

    @When("user selects employee {string}")
    public void user_selects_employee(String string) {
Driver.selectRandomTextFromDropdown(new Select(us_013.employee));
    }

    @When("user clicks save button")
    public void user_clicks_save_button() {
//us_013.saveButton.click();
    }

    @Then("verify account created at account page")
    public void verify_account_created_at_account_page() {

    }







}
