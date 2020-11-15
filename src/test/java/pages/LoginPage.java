package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
<<<<<<< HEAD

public class LoginPage extends BasePage {

    @FindBy(xpath ="(//div[@class='collapse navbar-collapse']/ul/li)[8]" )
    public WebElement userIcon;

    @FindBy(id = "login-item")
    public WebElement signIn;

    @FindBy(xpath = "//span[text()='Register']")
    public WebElement register;
=======
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LoginPage {

    // 11update try to best11
    // try again dont give up
    public LoginPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    //@FindBy(id ="account-menu")
    //public WebElement loginIcon;

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

    @FindBy(xpath ="//a[@href='/logout']")
    public WebElement signOut;

    @FindBy(xpath="//button[@class='btn btn-secondary']")
    public WebElement cancelButton;

>>>>>>> master

}
