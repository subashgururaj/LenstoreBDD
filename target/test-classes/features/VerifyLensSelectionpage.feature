Feature: Validated Product detail page

  Scenario Outline: Product details Page must be displayed
    Given user clicks on <lens>
     Then user must be navigated to <lens> selection page
      And user adds contact lens prescription for <LeftEyePowerValue> and <RightEyePowerValue>
  
    Examples: 
  
      | lens                     | LeftEyePowerValue | RightEyePowerValue | 
      | Dailies AquaComfort Plus | -15.00            | -14.50             | 
  
  