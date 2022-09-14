package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public static WebDriver webDriver;

    public LoginPage(WebDriver webDriver){
        PageFactory.initElements(webDriver, this);
    }

    @FindBy(xpath ="//li[@class='active']/a[contains(.,'Sign in')]")
    private WebElement signinButton;

    @FindBy(xpath ="//input[@id='email']")
    private WebElement inputEmailAddress;

    @FindBy(xpath ="//input[@id='passwd']")
    private WebElement inputPassword;

    @FindBy(xpath ="//button[@id='SubmitLogin']/span[contains(.,'Sign in')]")
    private WebElement buttonLogin;

    @FindBy(xpath ="//a[@title='Home']")
    private WebElement homeButton;


    public void pressButtonSignIn(){
        signinButton.click();
    }

    public void enterEmailAddress() throws InterruptedException {
        Thread.sleep(2000);
        inputEmailAddress.sendKeys("fenyekaputri1992@gmail.com");
    }

    public void enterPassword(){
        inputPassword.sendKeys("Fences19641204");
    }

    public void pressButtonLogin(){
        buttonLogin.click();
    }

    public void pressButtonHome(){
        homeButton.click();
    }


}


