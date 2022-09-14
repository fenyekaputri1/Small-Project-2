package stepDefinition;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.example.pageObject.HomePage;
import org.example.pageObject.RoomPreferencePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class BookingHotelStep {

    WebDriver webDriver;
    public BookingHotelStep(){

    }
    @Given("User is already landing in booking hotel page")
    public void user_is_already_landing_in_booking_hotel_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "/Users/fenyekaputri/Downloads/chromedriver");
        webDriver = new ChromeDriver();
        webDriver.manage().deleteAllCookies();
        webDriver.get("http://qa.cilsy.id:8080/");
        webDriver.manage().window().maximize();

        HomePage homepage1 = new HomePage(webDriver);
        Assert.assertEquals("Hotel Dominic Parks",homepage1.getHotelName());
    }

    @Given("User enter hotel location")
    public void user_enter_hotel_location() throws Throwable {
    HomePage homepage = new HomePage(webDriver);
    homepage.hotelLocation();
    }

    @Given("User enter select hotel")
    public void user_enter_select_hotel() throws Throwable {
        HomePage homepage = new HomePage(webDriver);
        homepage.hotelSelect();
    }

    @Given("User enter check in date")
    public void user_enter_check_in_date() throws Throwable {
        HomePage homePage = new HomePage(webDriver);
        homePage.checkInDate();
    }

    @Given("User enter check out date")
    public void user_enter_check_out_date() throws Throwable {
        HomePage homePage = new HomePage(webDriver);
        homePage.checkOutDate();
    }

    @When("press search now button")
    public void press_search_now_button() throws Throwable {
        HomePage homePage = new HomePage(webDriver);
        homePage.searchNowButton();


    }

    @Then("^go to search room page$")
    public void go_to_search_room_page() throws Throwable {
        RoomPreferencePage roomPreferencePage = new RoomPreferencePage(webDriver);
        Assert.assertEquals("Search Rooms",roomPreferencePage.searchRoomsText());
    }








}
