$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Test Booking Hotel",
  "description": "",
  "id": "test-booking-hotel",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "User can booking hotel in homepage QLO",
  "description": "",
  "id": "test-booking-hotel;user-can-booking-hotel-in-homepage-qlo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is already landing in booking hotel page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter hotel location",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enter select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStep.user_is_already_landing_in_booking_hotel_page()"
});
formatter.result({
  "duration": 11701589625,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.user_enter_hotel_location()"
});
formatter.result({
  "duration": 3163830666,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.user_enter_select_hotel()"
});
formatter.result({
  "duration": 4649376167,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Test Login",
  "description": "",
  "id": "test-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "User can loging using valid creadentials",
  "description": "",
  "id": "test-login;user-can-loging-using-valid-creadentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open page login Qlo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User press signin button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter email",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User press login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is navigate to page booking hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_open_page_login_Qlo()"
});
formatter.result({
  "duration": 10314985834,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d105.0.5195.102)\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027MacBook-Pro-Feny.local\u0027, ip: \u0027fe80:0:0:0:14e6:50b7:972d:62f4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.5.1\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bcfafade6a7c03e53aa7770bccb394fa, maximizeCurrentWindow {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: /var/folders/8h/x9s__9711pl...}, goog:chromeOptions: {debuggerAddress: localhost:51495}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:51495/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bcfafade6a7c03e53aa7770bccb394fa\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:624)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:628)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:1027)\n\tat stepDefinition.LoginStep.user_open_page_login_Qlo(LoginStep.java:20)\n\tat ✽.Given User open page login Qlo(login.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.user_press_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_enter_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_press_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.user_is_navigate_to_page_booking_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Test Register",
  "description": "",
  "id": "test-register",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "User can create new account",
  "description": "",
  "id": "test-register;user-can-create-new-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User navigate to URL QLO",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User go to sign in menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User create new account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User follow all the Personal Information",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Then User is successfull create new account",
  "keyword": "Then "
});
formatter.match({
  "location": "registerStep.user_navigate_to_URL_QLO()"
});
formatter.result({
  "duration": 5970797833,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d105.0.5195.102)\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027MacBook-Pro-Feny.local\u0027, ip: \u0027fe80:0:0:0:14e6:50b7:972d:62f4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002712.5.1\u0027, java.version: \u002711.0.15\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [86da4134770594336918178cd95d8aa2, maximizeCurrentWindow {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: /var/folders/8h/x9s__9711pl...}, goog:chromeOptions: {debuggerAddress: localhost:51520}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:51520/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 86da4134770594336918178cd95d8aa2\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:624)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:628)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:1027)\n\tat stepDefinition.registerStep.user_navigate_to_URL_QLO(registerStep.java:22)\n\tat ✽.Given User navigate to URL QLO(register.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "location": "registerStep.user_go_to_sign_in_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registerStep.user_create_new_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registerStep.user_follow_all_the_Personal_Information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registerStep.then_User_is_successfull_create_new_account()"
});
formatter.result({
  "status": "skipped"
});
});