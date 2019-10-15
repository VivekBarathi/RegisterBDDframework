package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		format={"pretty","html:report/html","json:report/json/cucumber.json"},
		tags={"@TEST"},
		features="src/main/java/featureFile", 
		glue={"stepDefinitions"}
		)


public class TestRunner extends AbstractTestNGCucumberTests {
	
	

}
