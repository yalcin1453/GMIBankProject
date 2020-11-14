package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.RegistrationPage;

public class US002_TC3 {

    RegistrationPage registrationPage=new RegistrationPage();
    @When("User enters mobile phone number and mobile phone number has -")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberHas() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456-565-5656");
    }


    @Then("User shouldn't see invalid mobile phone number message")
    public void userShouldnTSeeInvalidMobilePhoneNumberMessage() {
        Assert.assertFalse(registrationPage.mobilePhoneNumberInvalidMessage.isDisplayed());
    }

    @When("User enters mobile phone number and mobile phone number contains a char")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberContainsAChar() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456-56A-5656");
    }


    @When("User enters mobile phone number and mobile phone number contains space")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberContainsSpace() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456 565 5656");
    }

    @When("User enters mobile phone number and mobile phone number contains special character")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberContainsSpecialCharacter() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456%565%5656");
    }

    @When("User enters mobile phone number and mobile phone number contains punctuation")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberContainsPunctuation() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456?565?5656");
    }

    @Then("User should see invalid mobile phone number message")
    public void userShouldSeeInvalidMobilePhoneNumberMessage() {
        Assert.assertTrue(registrationPage.mobilePhoneNumberInvalidMessage.isDisplayed());

    }


}
