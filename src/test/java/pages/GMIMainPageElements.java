package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class GMIMainPageElements {

    /**
     * Author
     * Servet
     */

    @FindBy(how = How.XPATH, using = "//a[@href='#']")
    public static WebElement signDropDown;

    @FindBy(how = How.XPATH, using = " //*[@id=\"login-item\"]/span")
    public static WebElement signInButton;


}
