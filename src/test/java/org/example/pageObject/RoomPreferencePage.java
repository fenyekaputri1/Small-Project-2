package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RoomPreferencePage {
    WebDriver webDriver;

    public RoomPreferencePage(WebDriver webDriver){
        PageFactory.initElements(webDriver, this);
    }

    @FindBy(xpath = "//p[.='Search Rooms']")
    public WebElement searchRoomsText;

    public String searchRoomsText(){
        return searchRoomsText.getText();
    }
}
