package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.Us_014pages;
import pages.Us_015pages;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.List;

public class US_15 {
    Us_015pages object=new Us_015pages();
    Us_014pages objectUs14=new Us_014pages();

    //TC_001

    @Given("User  go to the sign in page")
    public void user_go_to_the_sign_in_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url_login"));
    }

    @When("User  type username and password than click on sign in button")
    public void user_type_username_and_password_than_click_on_sign_in_button() throws InterruptedException {
        objectUs14.username.sendKeys(ConfigurationReader.getProperty("username_customer"));
        objectUs14.password.sendKeys(ConfigurationReader.getProperty("password_customer"));
       Thread.sleep(5000);
       objectUs14.signinButton.click();
    }

    @When("User  click on {string} dropdown menu")
    public void user_click_on_dropdown_menu(String string) throws InterruptedException {
        objectUs14.myOperationsButton.click();
        Thread.sleep(3000);
    }

    @Then("User  click on {string}")
    public void user_click_on(String string) {
        object.myAccounts.click();
    }

    @Given("User see all account types")
    public void user_see_all_account_types() {
        List<WebElement> accountTypes=Driver.getDriver().findElements(By.xpath("//div[@id='root']//thead//th[2]"));
        for(WebElement account:accountTypes){
            System.out.println(account.getText());
        }
        boolean isDisplayed=accountTypes.isEmpty();
        Assert.assertFalse(isDisplayed);
    }

    @Then("User see balance populates")
    public void user_see_balance_populates() {
        List<WebElement> accountbalance=Driver.getDriver().findElements(By.xpath("//div[@id='root']//thead//th[3]"));
       for(WebElement account:accountbalance){
            System.out.println(account.getText());
        }
        boolean isDisplayed=accountbalance.isEmpty();
        Assert.assertFalse(isDisplayed);
    }

    @Given("User click the {string} button")
    public void user_click_the_button(String string) {
        object.viewTransc.click();
    }

    @Then("User see all transaction")
    public void user_see_all_transaction() throws InterruptedException {
        boolean isDisplayed= object.mesaageTransctn.isDisplayed();
       Thread.sleep(3000);
       Assert.assertTrue(isDisplayed);
    }

}
