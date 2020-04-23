package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import Base.BaseUtil;



public class homepage  {
	
	@FindBy(how = How.XPATH, using = "//div[@class='c-product-list c-product-list--homepage']")
	public WebElement ProcudtList;

	public homepage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		
	}

	public void verify_click_onProduct(String productName) {
		
		  String ProductNameXpath = "//div/a[@title='" + productName + "']"; 
		  BaseUtil.Driver.findElement(By.xpath(ProductNameXpath)).click();
		/*
		 * WebElement element = BaseUtil.Driver.findElement(By.xpath(ProductNameXpath));
		 * JavascriptExecutor executor = (JavascriptExecutor)BaseUtil.Driver;
		 * executor.executeScript("arguments[0].click();", element);
		 */
		 // New line of commit to hygieia dashboard
	}

	

}
