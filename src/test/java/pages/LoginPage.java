package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LoginPage {


   public LoginPage(){
    PageFactory.initElements(Driver.getDriver(),this);
  }

  @FindBy(xpath = "//a[@class='d-flex align-items-center dropdown-toggle nav-link']")
    public WebElement accountSignButton;

   @FindBy(xpath = "//a[@id='login-item']")
    public WebElement SignIn;

   @FindBy(xpath = "//input[@id='username']")
    public WebElement username;

   @FindBy(xpath = "//input[@id='password']")
    public WebElement password;

   @FindBy(xpath = "//button[@type='submit']")
    public WebElement SignInButton;


}
