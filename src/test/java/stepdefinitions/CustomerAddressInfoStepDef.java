package stepdefinitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.CustomerAddressInfoPage;


public class CustomerAddressInfoStepDef {

    CustomerAddressInfoPage us_010 = new CustomerAddressInfoPage();

    @Then("verify displayed {string} message under address textbox")
    public void verify_displayed_message_under_address_textbox(String string) {
        Assert.assertEquals(string,us_010.adressMessage.getText());
    }

    @Then("verify displayed {string} message under city textbox")
    public void verify_displayed_message_under_city_textbox(String string) {
        Assert.assertEquals(string,us_010.cityMessage.getText());
    }

    @Then("verify displayed {string} message under country textbox")
    public void verify_displayed_message_under_country_textbox(String string) {
        Assert.assertEquals(string,us_010.countryMessage.getText());
    }

    @Then("verify displayed {string} message under state textbox")
    public void verify_displayed_message_under_state_textbox(String string) {
        Assert.assertEquals(string,us_010.stateMessage.getText());
    }

}
