package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class RegistrationPage  {

    public RegistrationPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id="register-title")
    public WebElement registrationPageTitle;

    @FindBy(id="ssn")
    public WebElement ssnInput;

    @FindBy(xpath = "//*[contains(text(),'Your SSN is required')]")
    public WebElement ssnRequiredMessage;

    @FindBy(xpath = "//*[contains(text(),'Your SSN is invalid')]")
    public WebElement ssnInvalidMessage;


    @FindBy(xpath = "//input[@name='firstname']")
    public WebElement firstNameInput;


    @FindBy(xpath = "//*[contains(text(),'Your First Name is required')]")
    public WebElement firstNameRequiredMessage;


    @FindBy(xpath = "//input[@name='lastname']")
    public WebElement lastNameInput;

    @FindBy(xpath = "//*[contains(text(),'Your Last Name is required')]")
    public WebElement lastNameRequiredMessage;


    @FindBy(id="address")
    public WebElement addressInput;


    @FindBy(xpath = "//input[@name='mobilephone']")
    public WebElement mobilePhoneNumberInput;

    @FindBy(xpath = "//*[contains(text(),'Your mobile phone number is invalid')]")
    public WebElement mobilePhoneNumberInvalidMessage;

    @FindBy(xpath = "//input[@name='username']")
    public WebElement usernameInput;

    @FindBy(xpath = "//*[contains(text(),'Your username is required')]")
    public WebElement usernameRequiredMessage;


    @FindBy(xpath = "//input[@name='email']")
    public WebElement emailInput;


    @FindBy(xpath = "//*[contains(text(),'Your email is required')]")
    public WebElement emailRequiredMessage;

    @FindBy(xpath = "//*[contains(text(),'This field is invalid')]")
    public WebElement emailInvalidMessage;

    @FindBy(id = "firstPassword")
    public WebElement passwordInput;

    @FindBy(xpath = "//*[contains(text(),'Your password is required')]")
    public WebElement passwordRequiredMessage;

    @FindBy(xpath = "(//ul[@id='strengthBar']/li)[1]")
    public WebElement strengthBar1;

    @FindBy(xpath = "(//ul[@id='strengthBar']/li)[2]")
    public WebElement strengthBar2;

    @FindBy(xpath = "(//ul[@id='strengthBar']/li)[3]")
    public WebElement strengthBar3;

    @FindBy(xpath = "(//ul[@id='strengthBar']/li)[4]")
    public WebElement strengthBar4;

    @FindBy(xpath = "(//ul[@id='strengthBar']/li)[5]")
    public WebElement strengthBar5;


    @FindBy(xpath = "//input[@name='secondPassword']")
    public WebElement secondPasswordInput;

    @FindBy(xpath = "//*[contains(text(),'Your confirmation password is required')]")
    public WebElement confirmationPasswordRequiredMessage;

    @FindBy(id = "register-submit")
    public WebElement registerButton;

    @FindBy(xpath ="//*[contains(text(),'Please check your email for confirmation')]")
    public WebElement successMessage;


}


