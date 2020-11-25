package stepdefinitions;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import utilities.ConfigurationReader;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.*;

public class US021_CountryApiStepDefinition {
    Response response;
    JsonPath json;
    List<Map<String, Object>> allCountryData;

    @Given("user gets all data for countries using api end point {string}")
    public void user_gets_all_data_for_countries_using_api_en_point(String url) {
        response = given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(url);
        response.then().
                assertThat().statusCode(200);
      //  response.prettyPrint();
        json = response.jsonPath();

    }

    @Given("user deserializes country data as json to java pojo")
    public void user_deserializes_country_data_as_json_to_java_pojo() {
        allCountryData = json.getList("$");
     //   System.out.println("list of countries :" + allCountryData);

        String fifthCountryName = allCountryData.get(4).get("name").toString();
        System.out.println("the name of the fifth country:" + fifthCountryName);


        Integer thirdCountryId = (int) allCountryData.get(2).get("id");
        System.out.println("the thirdCountryId :" + thirdCountryId);
        System.out.println("the count of the country:" + allCountryData.size());//86
        System.out.println(allCountryData.size());
        String lastCountryName = allCountryData.get(allCountryData.size() - 1).get("name").toString();
        System.out.println(lastCountryName);

    }
    @Then("user validates the data")
    public void user_validates_the_data() {

        String expectedCountryName="Sudan";
        String actualCountryName= allCountryData.get(70).get("name").toString();
        Assert.assertEquals(expectedCountryName,actualCountryName);

        int expectedCountryId=1751;
        int actualCountryId=(int) allCountryData.get(5).get("id");
        Assert.assertEquals(expectedCountryId,actualCountryId);

    }

    @Then("user validates the data one by one")
    public void userValidatesTheDataOneByOne() {

//        HashMap<String, Object> map = response.as(HashMap.class);
//        System.out.println(map);

    }
}