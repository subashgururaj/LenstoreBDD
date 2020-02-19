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
  "location": "VerifyLensSelectionpage.Verifu_clicks_on(String)"
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
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click addtobasket_button",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyLensChecout.userclick_addtobasketbutton()"
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
  "name": "Dailies AquaComfort Plus details is displayed on cartpage",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyLensChecout.details_is_displayed_on_cartpage(String)"
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
  "name": "user click on checkoutbutton",
  "keyword": "And "
});
formatter.match({
  "location": "VerifyLensChecout.user_click_on_checkoutbutton()"
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
  "name": "user is navigated to siginpage",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyLensChecout.user_is_navigated_to_siginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/VerifyLensSelectionpage.feature");
formatter.feature({
  "name": "Validated Product detail page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Product details Page must be displayed",
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
  "name": "Product details Page must be displayed",
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
  "location": "VerifyLensSelectionpage.Verifu_clicks_on(String)"
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
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});