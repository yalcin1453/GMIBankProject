package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ViewtransectionsPage {
    public ViewtransectionsPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[.='My Accounts']")
    public WebElement myAccounts;

    @FindBy(xpath = "(//*[.='View Transaction'])[1]")
    public WebElement viewTransc;

    @FindBy(xpath = "//div[@class='alert alert-warning']")
    public WebElement mesaageTransctn;
}
