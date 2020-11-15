package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utilities.Driver;

public class Userstory14 {

    public Userstory14(){
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

}
