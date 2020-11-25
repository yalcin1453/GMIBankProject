package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.RegistrationPage;

public class PasswordValidationStepDef {

    RegistrationPage registrationPage=new RegistrationPage();

    @When("User enters a password with at least one lower case char")
    public void user_enters_a_password_with_at_least_one_lower_case_char() {
        registrationPage.passwordInput.sendKeys("usertech");
        Assert.assertTrue(registrationPage.strengthBar1.isDisplayed());

    }

    @When("User enters a password with at least one upper case char")
    public void user_enters_a_password_with_at_least_one_upper_case_char() {
        registrationPage.passwordInput.sendKeys("Usertech");
        Assert.assertTrue(registrationPage.strengthBar2.isDisplayed());

    }


    @When("User enters a password with at least one digit")
    public void user_enters_a_password_with_at_least_one_digit() {
        registrationPage.passwordInput.sendKeys("Usertech1");
        Assert.assertTrue(registrationPage.strengthBar4.isDisplayed());
    }


    @When("User enters a password with at least one special char")
    public void user_enters_a_password_with_at_least_one_special_char() {
        registrationPage.passwordInput.sendKeys("UserTech1@");
        Assert.assertTrue(registrationPage.strengthBar4.isDisplayed());
    }



    @When("User enters a password with at least seven chars")
    public void user_enters_a_password_with_at_least_seven_chars() {
        registrationPage.passwordInput.sendKeys("UserTech1@");
        Assert.assertTrue(registrationPage.strengthBar4.isDisplayed());
    }

}
