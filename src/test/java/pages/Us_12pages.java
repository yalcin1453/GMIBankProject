package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class Us_12pages {

    public Us_12pages(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//input[@name='middleInitial']")
    public WebElement middleName;


    @FindBy(xpath = "//input[@name='email']")
    public WebElement email;

    @FindBy(xpath = "//input[@name='mobilePhoneNumber']")
    public WebElement mobileNumber;
    @FindBy(xpath = "//input[@id='tp-customer-phoneNumber']")
    public WebElement phoneNumber;
    @FindBy(xpath = "//input[@id='tp-customer-zipCode']")
    public WebElement zipCode;

    @FindBy(xpath = "input[@id='tp-customer-address']")
    public WebElement customer_address;

    @FindBy(id = "search-ssn")
    public WebElement ssnTextBox;
    @FindBy(id = "tp-customer-firstName")
    public WebElement firstNameTextBox;
    @FindBy(id = "tp-customer-lastName")
    public WebElement lastNameTextBox;
    @FindBy(id = "tp-customer-country")
    public WebElement countryDropDown;
    @FindBy(id = "tp-customer-state")
    public WebElement stateBox;
    @FindBy(id = "tp-customer-user")
    public WebElement userBox;
    @FindBy(id = "tp-customer-createDate")
    public WebElement date;
    @FindBy(id = "tp-customer-ssn")
    public WebElement getSsnTextBox;
    @FindBy(id ="tp-customer-city")

    public WebElement userBoxCity;
    @FindBy(xpath = "//option[contains(text(),'ticari kredi talebi')]")
    public WebElement account;
    @FindBy(id="save-entity")
    public WebElement saveButton;
    @FindBy(linkText = "My Operations")
    public WebElement myOperation;

    @FindBy(linkText = "Manage Customers")
    public WebElement manageCustomers;

    @FindBy(linkText = "Create a new Customer")
    public WebElement newCustomer;

    @FindBy(id= "tp-customer-address")
    public WebElement address;














}
