package stepdefinitions;

import com.github.javafaker.Faker;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.RegistrationPage;
import utilities.Driver;

public class US002_TC2 {
    RegistrationPage registrationPage=new RegistrationPage();

    @Given("User is on the registration page")
    public void userIsOnTheRegistrationPage() {

        Driver.getDriver().get("http://gmibank.com/account/register");
    }

    @When("User enters an SSN number and SSN number has -")
    public void userEntersAnSSNNumberAndSSNNumberHas() {
        registrationPage.ssnInput.sendKeys("888-56-7474"+Keys.ENTER);
    }


    @Then("User shouldn't see invalid SSN message")
    public void userShouldnTSeeInvalidSSNMessage() {
        try{
            if(registrationPage.ssnInvalidMessage.isDisplayed()){
                System.out.println("User sees invalid message");
            }
        }catch(Exception exception){
            System.out.println("User doesn't see invalid SSN message");
        }

    }

    @When("User enters an SSN number and SSN number contains a char")
    public void userEntersAnSSNNumberAndSSNNumberContainsAChar() {
        registrationPage.ssnInput.sendKeys("88X-56-7474"+Keys.ENTER);
    }


    @When("User enters an SSN number and SSN number contains space")
    public void userEntersAnSSNNumberAndSSNNumberContainsSpace() {
        registrationPage.ssnInput.sendKeys("888 56 7474"+Keys.ENTER);
    }

    @When("User enters an SSN number and SSN number contains special character")
    public void userEntersAnSSNNumberAndSSNNumberContainsSpecialCharacter() {
        registrationPage.ssnInput.sendKeys("888@56@7474"+Keys.ENTER);
    }

    @When("User enters an SSN number and SSN number contains punctuation")
    public void userEntersAnSSNNumberAndSSNNumberContainsPunctuation() {
        registrationPage.ssnInput.sendKeys("888?56?7474"+Keys.ENTER);
    }

    @Then("User should see invalid SSN message")
    public void userShouldSeeInvalidSSNMessage() {
        Assert.assertTrue(registrationPage.ssnInvalidMessage.isDisplayed());
    }
}
