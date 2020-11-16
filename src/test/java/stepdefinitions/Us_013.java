package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
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
    public void user_selects_account_type(String string) throws InterruptedException {
      Select select= new Select(us_013.accountType);
      Thread.sleep(5000);
      select.selectByValue(string);
    }

    @When("user selects account status type {string}")
    public void user_selects_account_status_type(String string) throws InterruptedException {
        Select select = new Select(us_013.accountStatusType);
        Thread.sleep(5000);
        select.selectByValue(string);

    }

    @When("user selects employee {string}")
    public void user_selects_employee(String string) {
     //Driver.selectRandomTextFromDropdown(new Select(us_013.employee));
    }

    @When("user clicks save button")
    public void user_clicks_save_button() {
    us_013.saveButton.click();
    }

    @Then("verify account created at account page")
    public void verify_account_created_at_account_page() {
       String toastMessage= Driver.waitForVisibility(us_013.toast,5).getText();
        System.out.println(toastMessage);
        Assert.assertTrue(toastMessage.contains("translation-not-found"));


    }
    @When("user leave the blank description box")
    public void user_leave_the_blank_description_box() {
        us_013.description.sendKeys("");
    }

    @Then("user get error message")
    public void user_get_error_message() {
Assert.assertEquals("This field is required.",us_013.feedbackDescription.getText());
    }


    @When("user leave blank balance box")
    public void userLeaveBlankBalanceBox() {
        us_013.balance.sendKeys("");
    }

    @Then("user get balance error message")
    public void userGetBalanceErrorMessage() {
        Assert.assertEquals("This field is required.",us_013.feedbackBalance.getText());
    }

    @When("user enter  balance box {string}")
    public void userEnterBalanceBox(String string) {
        us_013.balance.sendKeys(string);

    }

    @Then("user get balance errormessage")
    public void userGetBalanceErrormessage() {
        Assert.assertEquals("This field should be a number.",us_013.NonNumericBalance.getText());
    }
}
