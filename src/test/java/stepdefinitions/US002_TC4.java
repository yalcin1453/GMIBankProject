package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.RegistrationPage;

public class US002_TC4 {

    RegistrationPage registrationPage=new RegistrationPage();

    @When("User enters an email which contains @ sign and .com extension")
    public void userEntersAnEmailWhichContainsSignAndComExtension() {
        registrationPage.emailInput.sendKeys(" john@gmail.com");
    }

    @Then("User shouldn't see email invalid message")
    public void userShouldnTSeeEmailInvalidMessage() {
        Assert.assertFalse(registrationPage.emailInvalidMessage.isDisplayed());
    }

    @When("User enters an email which doesn't  contain @ sign  and .com extension")
    public void userEntersAnEmailWhichDoesnTContainSignAndComExtension() {
        registrationPage.emailInput.sendKeys(" johngmail");
    }

    @When("User enters an email which contains @ sign but doesn’t contain .com extension")
    public void userEntersAnEmailWhichContainsSignButDoesnTContainComExtension() {
        registrationPage.emailInput.sendKeys("john@gmail.dflkjgfdhkljndkbndxlkhmnx");
    }


    @When("User enters an email which doesn't contain @ sign, but contains .com extension")
    public void userEntersAnEmailWhichDoesnTContainSignButContainsComExtension() {
        registrationPage.emailInput.sendKeys("johngmail.com");
    }

    @Then("User should see email invalid message")
    public void userShouldSeeEmailInvalidMessage() {
        Assert.assertTrue(registrationPage.emailInvalidMessage.isDisplayed());
    }

}
