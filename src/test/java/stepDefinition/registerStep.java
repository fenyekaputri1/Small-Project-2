package stepDefinition;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.example.pageObject.RegistrationPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class registerStep {
    WebDriver webDriver;
    public void registerStep(){

    }
    @Given("^User navigate to URL QLO$")
    public void user_navigate_to_URL_QLO(){
        System.setProperty("webdriver.chrome.driver", "/Users/fenyekaputri/Downloads/chromedriver");
        webDriver = new ChromeDriver();
        webDriver.manage().deleteAllCookies();
        webDriver.get("http://qa.cilsy.id:8080/");
        webDriver.manage().window().maximize();

    }
    @When("^User go to sign in menu$")
    public void user_go_to_sign_in_menu() {
        RegistrationPage registrationPage = new RegistrationPage(webDriver);
        registrationPage.pressSignInButton();
    }

    @When("^User create new account$")
    public void user_create_new_account() throws InterruptedException {
        RegistrationPage registrationPage = new RegistrationPage(webDriver);
        registrationPage.enterNewEmail();
        registrationPage.pressCreateNewAccountButton();
    }

    @When("^User follow all the Personal Information$")
    public void user_follow_all_the_Personal_Information() throws Throwable {
        RegistrationPage registrationPage = new RegistrationPage(webDriver);
        registrationPage.EnterGender();
        registrationPage.fillPersonalInformation();
        registrationPage.dateOfBirth();
    }

    @Then("^Then User is successfull create new account$")
    public void then_User_is_successfull_create_new_account() throws Throwable {
        RegistrationPage registrationPage = new RegistrationPage(webDriver);
        registrationPage.registerButton();
    }

}
