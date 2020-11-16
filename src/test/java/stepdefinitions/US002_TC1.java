package stepdefinitions;

import com.github.javafaker.Faker;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.LoginPage;
import pages.RegistrationPage;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.Random;

public class US002_TC1 {

    LoginPage loginPage= new LoginPage();
    RegistrationPage registrationPage=new RegistrationPage();
    Faker faker= new Faker();


    @Given("User is on the login page")
    public void userIsOnTheLoginPage() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

     @When("User click on user icon link")
     public void userClickOnUserIconLink() {
       loginPage.loginIcon.click();
    }

    @Then("User click on register link")
    public void userClickOnRegisterLink() {
    loginPage.registerLink.click();
    }

   @And("Registration page is opened")
   public void registrationPageIsOpened() {

        String actualTitle=registrationPage.registrationPageTitle.getText();
        String expectedTitle="Registration";
        Assert.assertEquals(actualTitle,expectedTitle);
    }


    @And("user enters a valid SSN")
    public void userEntersAValidSSN() {
        registrationPage.ssnInput.sendKeys(faker.idNumber().ssnValid());
    }

    @And("user enters a valid FirstName")
    public void userEntersAValidFirstName() {
        registrationPage.firstNameInput.sendKeys(faker.name().firstName());
    }

    @And("user enters a valid LastName")
    public void userEntersAValidLastName() {
        registrationPage.lastNameInput.sendKeys(faker.name().lastName());
    }

    @And("user enters a valid Address")
    public void userEntersAValidAddress() {
        registrationPage.addressInput.sendKeys(faker.address().fullAddress());
    }

    @And("user enters a valid Mobile Phone Number")
    public void userEntersAValidMobilePhoneNumber() {
        registrationPage.mobilePhoneNumberInput.sendKeys("123-789-1313");
    }

    @And("user enters a valid Username")
    public void userEntersAValidUsername() {
        registrationPage.usernameInput.sendKeys(faker.name().username());
    }

    @And("user enters a valid Email")
    public void userEntersAValidEmail() {
        registrationPage.emailInput.sendKeys(faker.internet().emailAddress());
    }

    @And("user enters a valid Password")
    public void userEntersAValidPassword() {
        registrationPage.passwordInput.sendKeys("Aaaa12!");
    }

    @And("user enters the same password for confirmation password")
    public void userEntersTheSamePasswordForConfirmationPassword() {
        registrationPage.secondPasswordInput.sendKeys("Aaaa12!");
    }

    @Then("user clicks on register button")
    public void userClicksOnRegisterButton() {
        registrationPage.registerButton.click();
    }

    @Then("user should see a success message")
    public void userShouldSeeASuccessMessage() {

        WebDriverWait wait= new WebDriverWait(Driver.getDriver(),10);
        WebElement ew=wait.until(ExpectedConditions.visibilityOf(registrationPage.successMessage));
        Assert.assertTrue(ew.getText().contains("Please check your email for confirmation"));
    }


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
