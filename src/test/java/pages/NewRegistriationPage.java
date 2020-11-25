package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class NewRegistriationPage {
    /**
     * @author Orhan Demirci
     */
    public NewRegistriationPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(how = How.XPATH, using = "//*[@id='account-menu']/a")
    public WebElement userButton;

    @FindBy(how = How.XPATH, using = "//*[text()='Register']")
    public WebElement registerButton;

    @FindBy(how = How.XPATH, using = "//*[@id='register-title']/span")
    public WebElement registrationHeader;

    @FindBy(how = How.ID, using = "ssn")
    public WebElement ssnBox;

    @FindBy(how = How.ID, using = "firstname")
    public WebElement firstNameBox;

    @FindBy(how = How.ID, using = "lastname")
    public WebElement lastNameBox;

    @FindBy(how = How.ID, using = "address")
    public WebElement addressBox;

    @FindBy(how = How.ID, using = "mobilephone")
    public WebElement phoneBox;

    @FindBy(how = How.ID, using = "username")
    public WebElement usernameBox;

    @FindBy(how = How.ID, using = "email")
    public WebElement emailBox;

    @FindBy(how = How.ID, using = "firstPassword")
    public WebElement passwordBox;

    @FindBy(how = How.ID, using = "secondPassword")
    public WebElement passwordConfirmBox;

    @FindBy(how = How.XPATH, using = "//*[@id='register-submit']//*[text()='Register']")
    public WebElement submitButton;

    @FindBy(xpath = "//*[text()='Registration saved!']")
    public WebElement successMessage;
}