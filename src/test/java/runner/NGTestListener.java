package runner;

import Base.ExtentReportUtil;
import com.aventstack.extentreports.gherkin.model.Feature;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import java.io.IOException;

import static Base.BaseUtil.features;

public class NGTestListener implements ITestListener {

	ExtentReportUtil extentReportUtil = new ExtentReportUtil();

	public void onTestStart(ITestResult iTestResult) {
		System.out.println("On test start");
	}

	//@Override
	public void onTestSuccess(ITestResult iTestResult) {

		System.out.println("On test Sucess");
	}

	//@Override
	public void onTestFailure(ITestResult iTestResult) {
		System.out.println("On test failure");

		try {
			extentReportUtil.ExtentReportScreenshot();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	//@Override
	public void onTestSkipped(ITestResult iTestResult) {
		System.out.println("On test skipped");
	}

	//@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult iTestResult) {
		System.out.println("On test percentage");
	}

	//@Override
	public void onStart(ITestContext iTestContext) {
		System.out.println("On start");

		extentReportUtil.ExtentReport();

		features = extentReportUtil.extent.createTest(Feature.class, "Lens Feature");

	}

	//@Override
	public void onFinish(ITestContext iTestContext) {
		System.out.println("On finish");
		extentReportUtil.FlushReport();
	}
}
