package stepdefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hooks {
    //@Before is similar to @BeforeMethod in TestNG
    //In our case, @Before will run before each Scenario:
    //GLOBAL Hooks Annotation
    //This will run before every scenario
    @Before(order = 1)
    public void setUp(){


    }

    //Tagged Hooks Annotation
    //This will run before any SPECIFIC SCENARIO
    @Before(value = "@iphone",order = 2)
    public void searchIphone(){
        System.out.println("This is IPHONE SETUP Method in the Hooks");
    }

    //This will run After each Scenario
    @After
    public void tearDown(Scenario scenario){

        //Taking the screenshot
        final byte[] screenshot=((TakesScreenshot)Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        //We are embedding the screenshot as an image in our framework
        //We SHOULD get screenshot after every FAILING Scenario
        //Attaching the image if scenario fails
        if (scenario.isFailed()) {
            scenario.embed(screenshot, "image/png");
        }
        Driver.closeDriver();
    }

}
