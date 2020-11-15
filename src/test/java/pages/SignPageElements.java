package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SignPageElements {

    @FindBy(how = How.XPATH, using = "//input[@name='username']")
    public static WebElement username;

    @FindBy(how = How.XPATH, using = "//input[@name='password']")
    public static WebElement password;

    @FindBy(how = How.XPATH, using = "//div[text()='Username cannot be empty!']")
    public static WebElement usernameCannotBeEmpty;

    @FindBy(how = How.XPATH, using = "//div[text()='Password cannot be empty!']")
    public static WebElement passwordCannotBeEmpty;

    @FindBy(how = How.XPATH, using = "//span[text()='Cancel']")
    public static WebElement cancelButton;

    @FindBy(how = How.XPATH, using = "//button[@type='submit']")
    public static WebElement signInButton;

    @FindBy(how = How.XPATH, using = "//strong[text()='Failed to sign in!']")
    public static WebElement failedToSignIn;




}
