@Regression3
Feature:Test Booking Hotel

  @HomePage @Positivecase
  Scenario:User can search hotel in homepage
    Given User is already landing in booking hotel page
    And User enter hotel location
    And User enter select hotel
    And User enter check in date
    And User enter check out date
    When press search now button
    Then go to search room page