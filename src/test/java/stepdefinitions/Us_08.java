package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.Us08_Page;
import utilities.Driver;

public class Us_08 {
    Us08_Page us08_page = new Us08_Page();
    @When("user is on mainpage")
    public void user_is_on_mainpage() {
        Driver.wait(2);
        us08_page.userTab.click();
        us08_page.passwordTab.click();
    }

    @When("user Fill current password {string}")
    public void user_Fill_current_password(String string) {
        Driver.wait(2);
        us08_page.currentPassword.sendKeys(string);
    }

    @When("user Fill New password with credentials {string}")
    public void user_Fill_New_password_with_credentials(String string) {
        Driver.wait(2);
        us08_page.newPassword.sendKeys(string);
    }

    @When("user Fill confirmation New password with credentials {string}")
    public void user_Fill_confirmation_New_password_with_credentials(String string) {
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
        us08_page.saveButton.click();

    }


}
