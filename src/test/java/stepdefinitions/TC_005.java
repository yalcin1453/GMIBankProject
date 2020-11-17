package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import pages.LoginPage;
import pages.SignPageElements;
import utilities.ConfigurationReader;
import utilities.Driver;

public class TC_005 {
SignPageElements signPageElements=new SignPageElements();
    @Then("verify user can't logged in with invalid credentials")
    public void verify_user_can_t_loged_in_with_invalid_crdentials() throws InterruptedException {

        System.out.println(Driver.waitForVisibility(signPageElements.failedToSignIn,5).getText());
        Thread.sleep(5000);
        Assert.assertEquals("Failed to sign in!",signPageElements.failedToSignIn.getText());


    }

}