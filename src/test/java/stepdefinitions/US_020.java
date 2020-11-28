package stepdefinitions;

import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import utilities.ConfigurationReader;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class US_020 {
    Response response;
    JsonPath json;
    List<Map<String,Object>>allCustomersData;
    @Given("use api end point {string}")
    public void use_api_end_point(String endPointUrl) {

        response=given().
                        accept(ContentType.JSON).
                         auth().oauth2(ConfigurationReader.getProperty("api_bearer_token")).
                when().
                    get(endPointUrl);
        //Eger post,put,patch request yapiyorsak accept type yerine ==>Content type kullaniyoruz
        //Eger get ve delete request yapiyorsak ==>accept type kullaniyoruz

        response.
                then().
                assertThat().
                statusCode(200);
       // response.prettyPrint();
        json=response.jsonPath();
    }

    @Given("get all customers information as De-Serialization")
    public void get_all_customers_information_as_De_Serialization() {
        allCustomersData=json.getList("$");//butun last elimde
        System.out.println("Java List Map response: "+allCustomersData);
        System.out.println(allCustomersData.get(0).get("firstName"));
       // System.out.println(allCustomersData.get(2).get("lastName"));
        String customerLastName= allCustomersData.get(2).get("lastName").toString();
        System.out.println(customerLastName);
        int id= (int) allCustomersData.get(0).get("id");
        System.out.println(id);
    }

    @Given("find out how many customers are and verify that there are {int} customers")
    public void find_out_how_many_customers_are_and_verify_that_there_are_customers(Integer customerCount) {
      Integer actualCustomerCount=allCustomersData.size();
      Assert.assertEquals(customerCount,actualCustomerCount);

    }

    @Given("get all the information of the seventh customer")
    public void get_all_the_information_of_the_seventh_customer() {
        System.out.println(allCustomersData.get(6));
    }

    @Given("verify seventh customers ssn is {string} and country name is {string}")
    public void verify_seventh_customers_ssn_is_and_country_name_is(String expectedSsn, String expectedCountryName) {
       String actualSsn=allCustomersData.get(6).get("ssn").toString();
       Assert.assertEquals(expectedSsn,actualSsn);

        String actualCountryName=json.getString("country[6].name");
        Assert.assertEquals(expectedCountryName,actualCountryName);

    }

    @Given("verify first customer's firstName {string}")
    public void verify_first_customer_s_firstName(String expectedFirstName) {
        Assert.assertEquals(expectedFirstName,json.getString("firstName[0]"));
       // Assert.assertEquals(expectedFirstName,allCustomersData.get(0).get("firstName"));

    }

    @Given("verify secand customer's lastName {string}")
    public void verify_secand_customer_s_lastName(String expectedLastName) {
        String actualLastName=allCustomersData.get(1).get("lastName").toString();
    Assert.assertEquals(expectedLastName,actualLastName);
    }

    @Given("verify fifth customer's country {string}")
    public void verify_fifth_customer_s_country(String expectedCountry) {
        String actualCountry=json.getString("country[4].name");
        Assert.assertEquals(expectedCountry,actualCountry);

    }

    @Given("verify last customer's user email {string}")
    public void verify_last_customer_s_user_email(String expectedEmail) {
        String actualEmail=allCustomersData.get(allCustomersData.size()-1).get("email").toString();
        Assert.assertEquals(expectedEmail,actualEmail);

    }



}
