package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class Us_013pages {

    public Us_013pages(){

        PageFactory.initElements(Driver.getDriver(),this);

    }
    @FindBy(id = "account-menu")
    public WebElement loginIcon;

    @FindBy(xpath ="//span[contains(text(),'Sign in')]")
    public WebElement signInLink;

    @FindBy(xpath = "//input[@id='username']")
    public WebElement usernameTextBox;

    @FindBy(xpath = "//input[@id='password']")
    public WebElement passwordTextBox;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement signInButton;

    @FindBy(linkText = "My Operations")
    public WebElement myOperations;
    @FindBy(linkText = "Manage Accounts")
    public WebElement myAccounts;
    @FindBy(linkText = "Create a new Account")
    public WebElement createNewAccount;



    @FindBy(xpath = "//input[@id='tp-account-description']")
    public WebElement description;
    @FindBy(xpath = "//input[@id='tp-account-balance']")
    public WebElement balance;
    @FindBy(xpath = "//select[@id='tp-account-accountType']")
    public WebElement accountType;
    @FindBy(xpath = "//select[@id='tp-account-accountStatusType']")
    public WebElement accountStatusType;
    @FindBy(xpath = "//select[@id='tp-account-employee']")
    public WebElement employee;
    @FindBy(id="save-entity")
    public WebElement saveButton;














}
