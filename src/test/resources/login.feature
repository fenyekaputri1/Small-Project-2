@Regression1
Feature:Test Login

  @Login @Positivecase
  Scenario:User is successfull login
    Given User open page login Qlo
    When User press signin button
    And User enter email
    And User enter password
    And User press login button
#    Then User is navigate to page booking hotel
