package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.junit.Ignore;
import org.openqa.selenium.Keys;
import pages.RegistrationPage;

public class Registration_TC4StepDef {

    RegistrationPage registrationPage=new RegistrationPage();

    @When("User enters an email which contains @ sign and .com extension")
    public void userEntersAnEmailWhichContainsSignAndComExtension() {
        registrationPage.emailInput.sendKeys(" john@gmail.com"+Keys.ENTER);
    }

    @Then("User shouldn't see email invalid message")
    public void userShouldnTSeeEmailInvalidMessage() {
        try{
            if(registrationPage.emailInvalidMessage.isDisplayed()){
                System.out.println("User sees invalid message");
            }
        }catch(Exception exception){
            System.out.println("User doesn't see invalid email message");
        }

    }

    @When("User enters an email which doesn't  contain @ sign  and .com extension")
    public void userEntersAnEmailWhichDoesnTContainSignAndComExtension() {
        registrationPage.emailInput.sendKeys(" johngmail"+ Keys.ENTER);
    }


    //@When("User enters an email which contains @ sign but doesn’t contain .com extension")
    //public void userEntersAnEmailWhichContainsSignButDoesnTContainComExtension() {
      //  registrationPage.emailInput.sendKeys("john@gmail.dflkjgfdhkljndkbndxlkhmnx"+Keys.ENTER);
   // }


    @When("User enters an email which doesn't contain @ sign, but contains .com extension")
    public void userEntersAnEmailWhichDoesnTContainSignButContainsComExtension() {
        registrationPage.emailInput.sendKeys("johngmail.com"+Keys.ENTER);
    }

    @Then("User should see email invalid message")
    public void userShouldSeeEmailInvalidMessage() {
        Assert.assertTrue(registrationPage.emailInvalidMessage.isDisplayed());
    }

}
