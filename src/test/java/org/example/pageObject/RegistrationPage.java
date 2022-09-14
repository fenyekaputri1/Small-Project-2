package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegistrationPage {
    public static WebDriver webDriver;

    public RegistrationPage(WebDriver webDriver){
        PageFactory.initElements(webDriver, this);
    }
    @FindBy(xpath = "//li[@class='active']/a[contains(.,'Sign in')]")
    private WebElement signinButton;

    @FindBy(xpath = "//input[@id='email_create']")
    private WebElement enterEmail;

    @FindBy(xpath = "//span[contains(.,'Create an account')]")
    private WebElement pressCreateAccount;

    @FindBy(xpath = "//input[@value='2']")
    private WebElement enterGender;

    @FindBy(xpath = "//input[@id='customer_firstname']")
    private WebElement enterFirstName;

    @FindBy(xpath = "//input[@id='customer_lastname']")
    private WebElement enterLastName;

    @FindBy(xpath = "//input[@id='passwd']")
    private WebElement enterPass;

    @FindBy(xpath = "//select[@id='days']")
    private WebElement enterDays;

    @FindBy(xpath = "//select[@id='months']")
    private WebElement enterMonths;

    @FindBy(xpath = "//select[@id='years']")
    private WebElement enterYears;

    @FindBy(xpath = "//span[contains(.,'Register')]")
    private WebElement pressRegisterButton;


    public void pressSignInButton() {
        signinButton.click();
    }

    public void enterNewEmail() throws InterruptedException {
        Thread.sleep(2000);
        enterEmail.sendKeys("test4@gmail.com");
    }

    public void pressCreateNewAccountButton() {
        pressCreateAccount.click();
    }

    public void EnterGender() throws InterruptedException {
        Thread.sleep(2000);
        enterGender.click();
    }

    public void fillPersonalInformation() throws InterruptedException {
        Thread.sleep(2000);
        enterFirstName.sendKeys("Fika");
        enterLastName.sendKeys("Handayani");
        enterPass.sendKeys("Abcd1234");
     }

     public void dateOfBirth() throws InterruptedException {
         Thread.sleep(2000);
         enterDays.sendKeys("3");
         enterMonths.sendKeys("April");
         enterYears.sendKeys("1998");
     }

     public void registerButton(){
        pressRegisterButton.click();
     }



}
