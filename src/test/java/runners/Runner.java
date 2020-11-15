package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json",
                "junit:target/xml-report/cucumber.xml"
        },
        features ="src/test/resources",
        glue = "stepdefinitions",
<<<<<<< HEAD
        dryRun = true
=======


        tags = "@login",

        dryRun = false
>>>>>>> master
)
public class Runner {


}
