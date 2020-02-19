package steps;

import Base.BaseUtil;


import cucumber.api.PickleStepTestStep;
import cucumber.api.TestCase;
import gherkin.pickles.PickleStep;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;


public class Hook extends BaseUtil{


    private BaseUtil base;

    public Hook(BaseUtil base) {
        this.base = base;
    }

    @Before
    public void InitializeTest(Scenario scenario) {


        //scenarioDef = base.features.createNode(scenario.getName());

        WebDriverManager.chromedriver().version("79.0").setup();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("start-maximized"); 
		options.addArguments("enable-automation"); 
		options.addArguments("--no-sandbox"); 
		options.addArguments("--disable-infobars");
		options.addArguments("--disable-dev-shm-usage");
		options.addArguments("--disable-browser-side-navigation"); 
		options.addArguments("--disable-gpu"); 
		base.Driver = new ChromeDriver(options); 
		base.Driver.get("https://www.lenstore.co.uk/");

            }


    @After
    public void TearDownTest(Scenario scenario) {
        if (scenario.isFailed()) {
            
            System.out.println(scenario.getName());
        }
       
        base.Driver.quit();
    }

    @BeforeStep
    public void BeforeEveryStep(Scenario scenario) {
        System.out.println("Before every step " + scenario.getId());

       
    }

    @AfterStep
    public void AfterEveryStep(Scenario scenario) throws NoSuchFieldException, IllegalAccessException {
       
    }

}
