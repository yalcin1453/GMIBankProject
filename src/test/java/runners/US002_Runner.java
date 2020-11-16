package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json",
                "junit:target/xml-report/cucumber.xml"
        },
        features ="src\\test\\resources\\UiFeatures\\US002_AC1.feature",
        glue = "stepdefinitions",
        tags = "@AC_001",
        dryRun = false

)


public class US002_Runner {
}
