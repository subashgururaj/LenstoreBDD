package steps;


import com.aventstack.extentreports.GherkinKeyword;

import Base.BaseUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.*;

public class VerifyLensChecout extends BaseUtil {
	private  BaseUtil base;

    public VerifyLensChecout(BaseUtil base) {
        this.base = base;
    }

	homepage Homepage = new homepage(base.Driver);
	lensdetailspage lensdetailspage = new lensdetailspage(base.Driver);
	cartpage cartpage = new cartpage(base.Driver);

	@And("^user click addtobasket_button$")
	public void userclick_addtobasketbutton() throws Throwable {
		scenarioDef.createNode(new GherkinKeyword("And"), "User Click Add To BasketButton");
		lensdetailspage.user_addtobasket();
	}
	
	@And("^(.+) details is displayed on cartpage$")
	public void details_is_displayed_on_cartpage(String lens) throws Throwable {
		scenarioDef.createNode(new GherkinKeyword("And"), "Lens Details is displayed");
		cartpage.verify_lens_details_on_cart_page(lens);
	}

	 @And("^user click on checkoutbutton$")
	public void user_click_on_checkoutbutton() throws Throwable {
		 scenarioDef.createNode(new GherkinKeyword("And"), "User Click On CheckoutButton");
		cartpage.user_click_on_checkoutbutton();
	}
	 @Then("^user is navigated to siginpage$")
		public void user_is_navigated_to_siginpage() throws Throwable {
		 scenarioDef.createNode(new GherkinKeyword("And"), "User is Navigated To SiginPage");
			cartpage.verify_siginpage_isdisplayed();
		}
}
