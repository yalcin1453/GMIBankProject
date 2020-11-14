package stepdefinitions;

import com.github.javafaker.Faker;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.RegistrationPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class US002_TC1_Negative {

    RegistrationPage registrationPage=new RegistrationPage();
    Faker faker= new Faker();

    @Given("user is on the registration page")
    public void userIsOnTheRegistrationPage() {
        Driver.getDriver().get("http://gmibank.com/account/register");
    }

    @When("user leaves SSN field blank")
    public void user_leaves_SSN_field_blank() {
        registrationPage.firstNameInput.sendKeys(faker.name().firstName());
        registrationPage.lastNameInput.sendKeys(faker.name().lastName());
        registrationPage.addressInput.sendKeys(faker.address().fullAddress());
        registrationPage.mobilePhoneNumberInput.sendKeys("111-111-1111");
        registrationPage.usernameInput.sendKeys(faker.name().username());
        registrationPage.emailInput.sendKeys(faker.internet().emailAddress());
        registrationPage.passwordInput.sendKeys("Aaaa12!");
        registrationPage.secondPasswordInput.sendKeys("Aaaa12!");
        registrationPage.registerButton.click();
    }

    @Then("user gets your SSN is required message")
    public void user_gets_your_SSN_is_required_message() {
        String expectedMessage="Your SSN is required";
        String actualMessage=registrationPage.ssnRequiredMessage.getText();
        Assert.assertTrue(actualMessage.contains(expectedMessage));
    }









}
