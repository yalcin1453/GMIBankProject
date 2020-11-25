package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.LoginPage;
import pages.PasswordSegmentPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class PasswordSegmentStepDef {
    LoginPage loginPage=new LoginPage();
    PasswordSegmentPage us08_page = new PasswordSegmentPage();

    @When("user login with valid credentials")
    public void user_login_with_valid_credentials() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
        loginPage.loginIcon.click();
        loginPage.signInLink.click();
        loginPage.usernameTextBox.sendKeys("Admin3");
        loginPage.passwordTextBox.sendKeys("TechAdmin3");
        loginPage.signInButton.click();

    }
    @When("user is on mainpage")
    public void user_is_on_mainpage() throws InterruptedException {
        Driver.wait(2);
        us08_page.userTab.click();
        Driver.wait(3);
        us08_page.passwordTab.click();
    }

    @When("user Fill current password {string}")
    public void user_Fill_current_password(String string) {
        Driver.wait(2);
        us08_page.currentPassword.clear();
        us08_page.currentPassword.sendKeys(string);
    }

    @When("user Fill New password with credentials {string}")
    public void user_Fill_New_password_with_credentials(String string) {
        us08_page.newPassword.clear();
        Driver.wait(2);
        us08_page.newPassword.sendKeys(string);
    }

    @When("user Fill confirmation New password with credentials {string}")
    public void user_Fill_confirmation_New_password_with_credentials(String string) {
        us08_page.confirmPassword.clear();
        Driver.wait(2);

        us08_page.confirmPassword.sendKeys(string);
    }

    @Then("verify the password strength")
    public void verify_the_password_strength() {

        Driver.wait(3);
        Assert.assertTrue(us08_page.passwordStrength1.isDisplayed());
    }

    @When("user click on save button")
    public void user_click_on_save_button() {
        Driver.wait(3);
        Assert.assertTrue(us08_page.saveButton.isEnabled());
//        us08_page.Signoutbutton.click();

    }


}
