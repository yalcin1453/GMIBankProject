package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LoginPage;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class TC001 {

    LoginPage loginPage=new LoginPage();

    @Given("user is on homepage")
    public void user_is_on_homepage() throws InterruptedException {
        // Write code here that turns the phrase above into concrete actions
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        //Driver.getDriver().manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        Thread.sleep(10);

    }

    @Given("user click on login icon")
    public void user_click_on_login_icon() {
        loginPage.loginIcon.click();
        // Write code here that turns the phrase above into concrete actions

    }

    @When("user click on signin")
    public void user_click_on_signin() {
        // Write code here that turns the phrase above into concrete actions
        Driver.wait(10);
        loginPage.signInLink.click();

    }

    @When("user enters username {string}")
    public void user_enters_username(String string) {
        // Write code here that turns the phrase above into concrete actions
        loginPage.usernameTextBox.sendKeys(string);

    }

    @When("user enters password {string}")
    public void user_enters_password(String string) {
        // Write code here that turns the phrase above into concrete actions
        loginPage.passwordTextBox.sendKeys(string);

    }

    @When("user click on siginButton")
    public void user_click_on_siginButton() {
        // Write code here that turns the phrase above into concrete actions
        loginPage.signInButton.click();

    }

    @Then("verify user is loged in")
    public void verify_user_is_loged_in() {
        // Write code here that turns the phrase above into concrete actions
        loginPage.loginIcon.click();
        Assert.assertTrue(loginPage.signInButton.isDisplayed());

    }

    @Then("verify cancel button displayed")
    public void verify_cancel_button_displayed() throws InterruptedException {
        // Write code here that turns the phrase above into concrete actions
        //WebDriverWait wait=new WebDriverWait(Driver.getDriver(),20);
        //Assert.assertTrue(loginPage.cancelButton.isDisplayed());
        loginPage.cancelButton.click();



    }


}
