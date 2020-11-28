package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.RegistrationPage;
import utilities.Driver;

public class Registration_TC3StepDef {

    RegistrationPage registrationPage=new RegistrationPage();



    @When("User enters mobile phone number and mobile phone number has -")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberHas() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456-565-5656"+ Keys.ENTER);
    }


    @Then("User shouldn't see invalid mobile phone number message")
    public void userShouldnTSeeInvalidMobilePhoneNumberMessage() {
        try{
            if(registrationPage.mobilePhoneNumberInvalidMessage.isDisplayed()){
                System.out.println("User sees invalid message");
            }
        }catch(Exception exception){
            System.out.println("User doesn't see invalid mobile phone message");
        }
    }

    @When("User enters mobile phone number and mobile phone number contains a char")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberContainsAChar() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456-56A-5656"+Keys.ENTER);
    }


    @When("User enters mobile phone number and mobile phone number contains space")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberContainsSpace() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456 565 5656"+Keys.ENTER);
    }

    @When("User enters mobile phone number and mobile phone number contains special character")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberContainsSpecialCharacter() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456%565%5656"+Keys.ENTER);
    }

    @When("User enters mobile phone number and mobile phone number contains punctuation")
    public void userEntersMobilePhoneNumberAndMobilePhoneNumberContainsPunctuation() {
        registrationPage.mobilePhoneNumberInput.sendKeys("456?565?5656"+Keys.ENTER);
    }

    @Then("User should see invalid mobile phone number message")
    public void userShouldSeeInvalidMobilePhoneNumberMessage() {
        Assert.assertTrue(registrationPage.mobilePhoneNumberInvalidMessage.isDisplayed());

    }


    @Then("User should see the password level chart change")
    public void userShouldSeeThePasswordLevelChartChange() {
    }
}
