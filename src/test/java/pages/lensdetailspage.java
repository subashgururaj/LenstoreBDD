package pages;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;



public class lensdetailspage  {
	public static WebDriver driver ;
	@FindBy(how = How.XPATH, using = "//*[@id='shiftBreadcrumb']")
	public WebElement Breadcrumb;

	@FindBy(how = How.ID, using = "addtobasket_button")
	public WebElement addtobasket_button;

	@FindBy(how = How.XPATH, using = "//span[@id='dispatch_delivery']")
	public WebElement deliveryEstimated;

	@FindBy(how = How.XPATH, using = "//select[@id='option1']")
	public WebElement Lefteyepower;
	@FindBy(how = How.XPATH, using = "//select[@id='optionB1']")
	public WebElement Righteyepower;

	public lensdetailspage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void verify_Lens_selection_page(String productname) {
		try {
			
			String breadcrumbDisplayed = Breadcrumb.getText();
			boolean Actualbreadcrumb = breadcrumbDisplayed.matches("(?i).*productname.*");
			 addtobasket_button.isDisplayed();
			
		} catch (NoSuchElementException e) {
			
		}
		

	}

	public void select_eye_power(String lefteyepw, String righteyepw) {

		Select dropdown1 = new Select(Lefteyepower);
		Select dropdown2 = new Select(Righteyepower);
		dropdown1.selectByVisibleText(lefteyepw);
		dropdown2.selectByVisibleText(righteyepw);
	}

	
	public void user_addtobasket() {
		addtobasket_button.click();
	}
}
