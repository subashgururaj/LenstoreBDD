package runner;


import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

import java.io.File;

import org.testng.annotations.AfterClass;
import org.testng.annotations.DataProvider;




@CucumberOptions(features = {"src/test/java/features"} , monochrome = true,
    plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json" },
glue = "steps")
public class TestRunner extends AbstractTestNGCucumberTests {






    

}
