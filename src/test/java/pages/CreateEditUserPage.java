package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class CreateEditUserPage {
    public CreateEditUserPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath="//form/div[1]/div[1]/input[@id='login']")
    public WebElement loginname;
    @FindBy(xpath="//form/div[2]/div[1]/input[@id='firstName']")
    public WebElement firstname;
    @FindBy(xpath="//input[@id='lastName']")
    public WebElement lastname;
    @FindBy(xpath="//input[@id='email']")
    public WebElement email;
    @FindBy(xpath="//input[@id='activated']")
    public WebElement activated;
    @FindBy(xpath="//select[@id='langkey']")
    public WebElement language;
    @FindBy(xpath="//select[@id='authorities']")
    public WebElement authorities;
    @FindBy(xpath="//button[@type='submit']")
    public WebElement saveSubmitBtn;
    @FindBy(xpath="//*[@id='root']/div/div/div[1]/div/div/div[1]")
    public WebElement successMessage;

}
