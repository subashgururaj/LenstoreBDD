package steps;



import Base.BaseUtil;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.*;

public class VerifyLensSelectionpage extends BaseUtil {
	private  BaseUtil base;

    public VerifyLensSelectionpage(BaseUtil base) {
        this.base = base;
    }

	homepage Homepage = new homepage(base.Driver);
	lensdetailspage lensdetailspage = new lensdetailspage(base.Driver);
	cartpage cartpage = new cartpage(base.Driver);
	
	

	@Given("^user clicks on (.+)$")
    public void Verifu_clicks_on(String lens) throws Throwable {
    	//Homepage.verify_click_onProduct(lens);
		Homepage.verify_click_onProduct(lens);
    }

	@Then("^user must be navigated to (.+) selection page$")
    public void user_must_be_navigated_to_selection_page(String lens) throws Throwable {
    	lensdetailspage.verify_Lens_selection_page(lens);
    	
    	
    }
	
	
	@And("^user adds contact lens prescription for (.+) and (.+)$")
    public void user_contact_lens_prescription_for_and(String lefteyepowervalue, String righteyepowervalue) throws Throwable {
		lensdetailspage.select_eye_power(lefteyepowervalue,righteyepowervalue);
    }
	
	
}
