package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    public static WebDriver webDriver;

    public HomePage(WebDriver webDriver){
        PageFactory.initElements(webDriver, this);
    }

    @FindBy(xpath ="//h1[@class='header-hotel-name']")
    private WebElement hotelName;
    @FindBy(xpath ="//input[@id='hotel_location']")
    private WebElement enterHotelLocation;

    @FindBy(xpath ="//button[@id='id_hotel_button']")
    private WebElement enterSelectHotel;

//    @FindBy(xpath ="//li[@class='search_result_li']")
//    private WebElement enterSelectHotel1;

    @FindBy(id ="check_in_time")
    private WebElement selectCheckInDate;

    @FindBy(xpath ="//a[.='24']")
    private WebElement pickFromDate;

    @FindBy(id ="check_out_time")
    private WebElement selectCheckOutDate;

    @FindBy(xpath ="//a[.='25']")
    private WebElement pickToDate;

    @FindBy(xpath ="//span[.='Search Now']")
    private WebElement pressSearchNowButton;

//    @FindBy(xpath ="//div[@id='ui-datepicker-div']")
//    private WebElement dataPickerTable;


    public String getHotelName(){
        return hotelName.getText();
    }
    public void hotelLocation(){
        enterHotelLocation.clear();
        enterHotelLocation.sendKeys("United States");
    }

    public void hotelSelect() throws InterruptedException {
          Thread.sleep(2000);
          enterSelectHotel.click();
//        enterSelectHotel1.click();
    }

    public void checkInDate() throws InterruptedException {
        Thread.sleep(2000);
        selectCheckInDate.click();
        Thread.sleep(2000);
        pickFromDate.click();
    }

    public void checkOutDate() throws InterruptedException {
        Thread.sleep(2000);
        selectCheckOutDate.click();
        Thread.sleep(2000);
        pickToDate.click();
    }

    public void searchNowButton() throws InterruptedException {
        pressSearchNowButton.click();
        Thread.sleep(1000);
    }

}

