package runner;


import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

import java.io.File;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.DataProvider;

import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features"} , monochrome = true,
glue = "steps",
plugin  = { "pretty", "html:target/cucumber", "json:target/cucumber.json" })
public class TestRunner extends AbstractTestNGCucumberTests {






    

}
