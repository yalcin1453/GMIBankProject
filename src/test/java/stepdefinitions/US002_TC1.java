package stepdefinitions;

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

public class US002_TC1 {

    LoginPage loginPage= new LoginPage();
    RegistrationPage registrationPage=new RegistrationPage();


    @Given("User is on the login page")
    public void userIsOnTheLoginPage() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @When("User click on user icon link")
    public void userClickOnUserIconLink() {
        loginPage.userIcon.click();
    }

    @Then("User click on register link")
    public void userClickOnRegisterLink() {
        loginPage.register.click();
    }

    @And("Registration page is opened")
    public void registrationPageIsOpened() {

        String actualTitle=registrationPage.registrationPageTitle.getText();
        String expectedTitle="Registration";
        Assert.assertEquals(actualTitle,expectedTitle);
    }

    @And("user enters a valid SSN")
    public void userEntersAValidSSN() {
        registrationPage.ssnInput.sendKeys("123-34-6578");
    }

    @And("user enters a valid FirstName")
    public void userEntersAValidFirstName() {
        registrationPage.firstNameInput.sendKeys("John");
    }

    @And("user enters a valid LastName")
    public void userEntersAValidLastName() {
        registrationPage.lastNameInput.sendKeys("Smith");
    }

    @And("user enters a valid Address")
    public void userEntersAValidAddress() {
        registrationPage.addressInput.sendKeys("123 Spring Road");
    }

    @And("user enters a valid Mobile Phone Number")
    public void userEntersAValidMobilePhoneNumber() {
        registrationPage.phoneNumberInput.sendKeys("147-123-1111");
    }

    @And("user enters a valid Username")
    public void userEntersAValidUsername() {
        registrationPage.usernameInput.sendKeys("john101");
    }

    @And("user enters a valid Email")
    public void userEntersAValidEmail() {
        registrationPage.emailInput.sendKeys("john101@gmail.com");
    }

    @And("user enters a valid Password")
    public void userEntersAValidPassword() {
        registrationPage.passwordInput.sendKeys("John123!");
    }

    @And("user enters the same password for confirmation password")
    public void userEntersTheSamePasswordForConfirmationPassword() {
        registrationPage.secondPasswordInput.sendKeys("John123!");
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
}
