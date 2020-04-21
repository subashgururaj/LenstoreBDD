$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/VerifyLensCheckout.feature");
formatter.feature({
  "name": "Lens checkout",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user must be able to checkout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on \u003clens\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "user must be navigated to \u003clens\u003e selection page",
  "keyword": "Then "
});
formatter.step({
  "name": "user adds contact lens prescription for \u003cLeftEyePowerValue\u003e and \u003cRightEyePowerValue\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user click addtobasket_button",
  "keyword": "And "
});
formatter.step({
  "name": "\u003clens\u003e details is displayed on cartpage",
  "keyword": "And "
});
formatter.step({
  "name": "user click on checkoutbutton",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to siginpage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "lens",
        "LeftEyePowerValue",
        "RightEyePowerValue"
      ]
    },
    {
      "cells": [
        "Dailies AquaComfort Plus",
        "-15.00",
        "-14.50"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user must be able to checkout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Dailies AquaComfort Plus",
  "keyword": "Given "
});
formatter.match({
  "location": "VerifyLensSelectionpage.Verify_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user must be navigated to Dailies AquaComfort Plus selection page",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyLensSelectionpage.user_must_be_navigated_to_selection_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user adds contact lens prescription for -15.00 and -14.50",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyLensSelectionpage.user_contact_lens_prescription_for_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//select[@id\u003d\u0027option1\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027X03163\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\JEYABA~1.GEO\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:59596}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 179c47a93a0576f0375597a7c948fb03\n*** Element info: {Using\u003dxpath, value\u003d//select[@id\u003d\u0027option1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:396)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:46)\r\n\tat pages.lensdetailspage.select_eye_power(lensdetailspage.java:53)\r\n\tat steps.VerifyLensSelectionpage.user_contact_lens_prescription_for_and(VerifyLensSelectionpage.java:44)\r\n\tat ✽.user adds contact lens prescription for -15.00 and -14.50(file:src/test/java/features/VerifyLensCheckout.feature:8)\r\n",
  "status": "failed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user click addtobasket_button",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyLensChecout.userclick_addtobasketbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Dailies AquaComfort Plus details is displayed on cartpage",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyLensChecout.details_is_displayed_on_cartpage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user click on checkoutbutton",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyLensChecout.user_click_on_checkoutbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to siginpage",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyLensChecout.user_is_navigated_to_siginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});