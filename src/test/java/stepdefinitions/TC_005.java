package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.LoginPage;
import pages.SignPageElements;
import utilities.ConfigurationReader;
import utilities.Driver;

public class TC_005 {

    @Then("verify user can't logged in with invalid credentials")
    public void verify_user_can_t_loged_in_with_invalid_crdentials() {
        String failedSignIn = SignPageElements.failedToSignIn.getText();
        Assert.assertEquals("Test case passed", failedSignIn,"Failed to sign in! Please check your credentials and try again.");
    }

}