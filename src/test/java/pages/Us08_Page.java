package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class Us08_Page {
    public Us08_Page(){PageFactory.initElements(Driver.getDriver(),this);}

    @FindBy(xpath = "//span[contains(text(),'Fyalcin yalcin')]")
    public WebElement userTab;

    @FindBy(xpath = "//span[contains(text(),'Password')]")
    public WebElement passwordTab;

    @FindBy(xpath = "//input[@id='currentPassword']")
    public WebElement currentPassword;

    @FindBy(xpath = "//input[@id='newPassword']")
    public WebElement newPassword;

    @FindBy(xpath = "//input[@id='confirmPassword']")
    public WebElement confirmPassword;

    @FindBy(xpath = "//ul[@id='strengthBar']//li[1]")
    public WebElement passwordStrength1;

    @FindBy(xpath = "//ul[@id='strengthBar']//li[2]")
    public WebElement passwordStrength2;
    @FindBy(xpath = "//ul[@id='strengthBar']//li[3]")
    public WebElement passwordStrength3;

    @FindBy(xpath = "//ul[@id='strengthBar']//li[4]")
    public WebElement passwordStrength4;

    @FindBy(xpath = "//ul[@id='strengthBar']//li[5]")
    public WebElement passwordStrength5;

    @FindBy(xpath = "//span[contains(text(),'Save')]")
    public  WebElement saveButton;

}



