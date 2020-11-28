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
        features ="src\\test\\resources\\UiFeatures\\PasswordValidation.feature",
        glue = "stepdefinitions",
        tags = "@US003",
        dryRun = false

)

public class US003_Runner {
}
