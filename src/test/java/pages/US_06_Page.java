package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class US_06_Page {

    public US_06_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//a[@aria-haspopup='true'])[2]")
    public WebElement userIcon;

    @FindBy(xpath = "(//a[@role='menuitem'])[3]")
    public WebElement userInfoLink;

    @FindBy(xpath = "//input[@id='firstName']")
    public WebElement firstNameBox;

    @FindBy(xpath = "//input[@id='lastName']")
    public WebElement lastNameBox;

    @FindBy(xpath = "//input[@id='email']")
    public WebElement emailBox;

    @FindBy(xpath = "//select[@id='langKey']")
    public WebElement selectLanguages;

    @FindBy(xpath = "//option")
    public List<WebElement> languageOptions;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement saveButton;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement invalidMassage;

}
