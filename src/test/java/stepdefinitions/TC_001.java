package stepdefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import pages.US_001;
import utilities.Constants;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class TC_001 {
    /**
     * @author Orhan Demirci
     * US_001
     */
    US_001 user = new US_001();

    @Given("^User is on the GMI bank page$")
    public void navigateToGMIWebsite() {
        Driver.getDriver().get("http://gmibank.com/");
        Assert.assertEquals(Constants.GMI_BANK_TITLE,Driver.getDriver().getTitle());

    }
    @And("^User navigates to new registration page$")
    public void navigateToRegistrationPage()  {
        user.userButton.click();
        user.registerButton.click();
        Assert.assertEquals(Constants.REGISTRATION_HEADER,user.registrationHeader.getText());

    }
    @When("^User enters a valid (.+) into (SSN|firstname|lastname|address|phone number|username|email|password|confirm password) text box$")
    public void enterValidCredentials(String text, String textBox)  {
        switch (textBox){
            case "SSN":
                user.ssnBox.sendKeys(text);
                break;
            case "firstname":
                user.firstNameBox.sendKeys(text);
                break;
            case "lastname":
                user.lastNameBox.sendKeys(text);
                break;
            case "address":
                user.addressBox.sendKeys(text);
                break;
            case "phone number":
                user.phoneBox.sendKeys(text);
                break;
            case "username":
                user.usernameBox.sendKeys(text);
                break;
            case "email":
                user.emailBox.sendKeys(text);
                break;
            case "password":
                user.passwordBox.sendKeys(text);
                break;
            case "confirm password":
                user.passwordConfirmBox.sendKeys(text);
                break;

        }

    }
    @And("^User clicks on register button$")
    public void clickOnRegisterBtn()  {
        user.submitButton.click();
    }
    @Then("^User validates the success message$")
    public void validateSuccessMessage()  {
     Driver.wait(2);
     Assert.assertEquals("Registration saved!",user.successMessage.getText());
     Driver.closeDriver();
    }
}
