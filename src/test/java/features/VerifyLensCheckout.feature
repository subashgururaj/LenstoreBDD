Feature: Lens checkout 


Scenario Outline: user must be able to checkout
  
    Given user clicks on <lens>
     Then user must be navigated to <lens> selection page
      And user adds contact lens prescription for <LeftEyePowerValue> and <RightEyePowerValue>
      And user click addtobasket_button
      And <lens> details is displayed on cartpage
      And user click on checkoutbutton
     Then user is navigated to siginpage 
  
    Examples: 
  
      | lens                     | LeftEyePowerValue | RightEyePowerValue | 
      | Dailies AquaComfort Plus | -15.00            | -14.50             | 