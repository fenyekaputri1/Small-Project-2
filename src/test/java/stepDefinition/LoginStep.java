package stepDefinition;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.example.pageObject.LoginPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginStep {
    WebDriver webDriver;
    public LoginStep(){
     }
    @Given("User open page login Qlo")
    public void user_open_page_login_Qlo(){
        System.setProperty("webdriver.chrome.driver", "/Users/fenyekaputri/Downloads/chromedriver");
        webDriver = new ChromeDriver();
        webDriver.manage().deleteAllCookies();
        webDriver.get("http://qa.cilsy.id:8080/");
        webDriver.manage().window().maximize();
    }

    @When("^User press signin button$")
    public void user_press_sign_in_button(){
        // Write code here that turns the phrase above into concrete actions
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.pressButtonSignIn();
    }

    @When("^User enter email$")
    public void user_enter_email() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.enterEmailAddress();
    }

    @When("^User enter password$")
    public void user_enter_password(){
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.enterPassword();
    }

    @When("^User press login button$")
    public void user_press_login_button(){
        // Write code here that turns the phrase above into concrete actions
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.pressButtonLogin();
    }

    @Then("User is navigate to page booking hotel")
    public void user_is_navigate_to_page_booking_hotel(){
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.pressButtonHome();
    }


}
