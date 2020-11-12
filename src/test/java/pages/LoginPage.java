package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {

    @FindBy(xpath ="(//div[@class='collapse navbar-collapse']/ul/li)[8]" )
    public WebElement userIcon;

    @FindBy(id = "login-item")
    public WebElement signIn;

    @FindBy(xpath = "//span[text()='Register']")
    public WebElement register;

}
