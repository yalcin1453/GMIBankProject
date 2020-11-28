package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.UserManagementPage;
import utilities.Driver;

public class AdminManageUsers {
    UserManagementPage ump = new UserManagementPage();
    String userName;

    @Given("user clicks on administrationButton")
    public void user_clicks_on_administrationButton() {
        ump.adminMenu.click();
    }

    @Given("user clicks on userManagement")
    public void user_clicks_on_userManagement() {
        ump.userManagement.click();
    }

    @Given("user click on activate button on user {string}")
    public void user_click_on_activate_button_on_user(String string) throws InterruptedException {
        userName = Driver.getDriver().findElement(By.xpath("(//*[contains(text(),'" + string + "')]//..//..//..//td[2])[1]")).getText();
        System.out.println(userName);

        WebElement activateButton = Driver.getDriver().findElement(By.xpath("(//*[contains(text(),'" + string + "')]//..//..//..//td[4])[1]//button"));
        activateButton.click();

    }


    @Then("verify user role activation")
    public void verify_user_role_activation() {
        Assert.assertEquals("A user is updated with identifier " + userName, Driver.waitForVisibility(ump.toastify, 10).getText());
    }


    @Given("admin click on view button {string}")
    public void admin_click_on_view_button(String string) {
        WebElement userViewButton = Driver.getDriver().findElement(By.xpath("//tbody//tr//td[6]//*[contains(text(),'"+string+"')]//..//..//..//td[10]//a[1]"));
        userName = Driver.getDriver().findElement(By.xpath("(//*[contains(text(),'" + string + "')]//..//..//..//td[2])[1]")).getText();
        userViewButton.click();

    }

    @Then("verify admin is on view page")
    public void verify_admin_is_on_view_page() {
        Driver.waitForPageToLoad(30);
        Assert.assertEquals(ump.userName.getText(),userName.toString());
    }


}
