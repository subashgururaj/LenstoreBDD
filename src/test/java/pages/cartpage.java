package pages;

import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Base.BaseUtil;

public class cartpage  {
	public static WebDriver driver ;
	@FindBy(how = How.XPATH, using = "//*[@class='buttonCTA']")
	public List<WebElement> ContinueCheckoutButton;
	@FindBy(how = How.XPATH, using = "//a[@title='View product details']")
	public WebElement Productdetails;
	
	@FindBy(how = How.XPATH, using = "//div[@class='checkoutOuter step1Container ']")
	public List<WebElement> SinginPage;
	public cartpage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	public void user_click_on_checkoutbutton() {
		
		ContinueCheckoutButton.get(0).click();
		
		
	}
	public void verify_lens_details_on_cart_page(String lens) {

		String itemdetails = Productdetails.getText();
		
		try {
			itemdetails.equalsIgnoreCase(lens);
			//ContinueCheckoutButton.click();
		} catch (Exception e) {

		}

	}
	
	public void verify_siginpage_isdisplayed() {
		boolean sigin = SinginPage.isEmpty();
	}

}
