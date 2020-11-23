package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utilities.Driver;

public class Us_014pages {

    public Us_014pages(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "(//*[.='My Operations'])[1]")
   public WebElement myOperationsButton;

    @FindBy(xpath = "//*[.='Manage Accounts']")
    public WebElement manageAccountsButton;

    @FindBy(xpath = "//input[@name='username']")
    public WebElement username;

    @FindBy(xpath = "//input[@name='password']")
    public WebElement password;

    @FindBy(xpath = "(//span[.='Sign in'])[3]")
    public WebElement signinButton;

    @FindBy(xpath = "//*[contains(text(),'Create a new Account')]")
    public WebElement createNewAccount;

    @FindBy(xpath = "//*[(text()='Manage Customers')]")
    public WebElement manageCustomersButton;

    //@FindBy(xpath = "//*[(text()='Create a new Customer')]")
    //public WebElement createNewCustomer;

 @FindBy (id = "jh-create-entity")
 public WebElement createNewCustomer;


    @FindBy(xpath = "//input[@id='search-ssn']")
    public WebElement ssn;

    @FindBy(xpath = "(//button[@type='button'])[2]")
    public WebElement Searchssn;

    @FindBy(id = "tp-customer-firstName")
    public WebElement firstName;

    @FindBy(xpath = "//table[@class='table']//tbody//tr[1]//td[1]")
    public WebElement idNum;

   @FindBy(xpath = "//*[.='Account']")
   public WebElement accountInfo;

    @FindBy(id = "tp-customer-zelleEnrolled")
    public WebElement zelleradio;

    @FindBy(xpath = "//span[.='Save']")
    public WebElement save;

    @FindBy(id = "tp-account-createDate")
    public WebElement createDateBox;

    @FindBy(id = "tp-account-closedDate")
    public WebElement closeDateBox;
}
