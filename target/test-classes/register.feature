@Regression2
Feature:Test Register

  @Register @Positivecase
  Scenario:User is successfull register for new account
    Given User navigate to URL QLO
    When User go to sign in menu
    And User create new account
    And User follow all the Personal Information
    Then Then User is successfull create new account


