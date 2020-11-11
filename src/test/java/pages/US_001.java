package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class US_001 {
    /**
     * @author Orhan Demirci
     */

    @FindBy(how = How.XPATH, using = "//*[@id='account-menu']/a")
    public static WebElement userButton;

    @FindBy(how = How.XPATH, using = "//*[text()='Register']")
    public static WebElement registerButton;

    @FindBy(how = How.ID, using = "ssn")
    public static WebElement ssnBox;

    @FindBy(how = How.ID, using = "firstname")
    public static WebElement firstNameBox;

    @FindBy(how = How.ID, using = "lastname")
    public static WebElement lastNameBox;

    @FindBy(how = How.ID, using = "address")
    public static WebElement addressBox;

    @FindBy(how = How.ID, using = "mobilephone")
    public static WebElement phoneBox;

    @FindBy(how = How.ID, using = "username")
    public static WebElement usernameBox;

    @FindBy(how = How.ID, using = "email")
    public static WebElement emailBox;

    @FindBy(how = How.ID, using = "firstPassword")
    public static WebElement passwordBox;

    @FindBy(how = How.ID, using = "secondPassword")
    public static WebElement passwordConfirmBox;

   @FindBy(how = How.XPATH, using = "//*[@id='register-submit']//*[text()='Register']")
    public static WebElement submitButton;













}
