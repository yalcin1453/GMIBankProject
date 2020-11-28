package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class UserManagementPage {
    @FindBy(id = "admin-menu")
    public WebElement adminMenu;
    @FindBy(xpath = "//span[text()='User management']//..")
    public WebElement userManagement;
    @FindBy(xpath = "//div[@class='Toastify__toast-body']")
    public WebElement toastify;

    @FindBy(xpath="//dd[1]//span[1]")
    public WebElement userName;

    @FindBy(xpath = "//input[@name='login']")
    public WebElement userEditLogin;

    @FindBy(xpath = "//input[@name='firstName']")
    public WebElement userEditFirstName;

    @FindBy(xpath = "//input[@name='lastName']")
    public WebElement userEditLastName;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement userEditSaveButton;


    public UserManagementPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }


}
