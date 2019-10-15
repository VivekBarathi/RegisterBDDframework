package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinitions {
	
	WebDriver driver; 
	
	@Given("^Login page$")
	public void userLogin(){
		System.setProperty("webdriver.chrome.driver","C:\\Users\\VIVEK\\Desktop\\automationjars\\chrome\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.automationtesting.in/");
		driver.manage().window().maximize();			
	}
	
	@When("^Title of login page is automation demo$")
	public void titleofloginpage(){
		String title=driver.getTitle();
		System.out.println("The title of the log-in page is " + title);
	}
	
	@Then("^click skip sign in$")
	public void skipsignin(){
		driver.findElement(By.xpath("//button[@id='btn2']")).click();
	}
	
	@Given("^Register the customer details$")
	public void registerpage(){
		
	}
	
	@When("^the page displays register form$")
	public void thepagedisplaysregisterform(){
		
	}
	
	@And("^user enters \"(.*)\"$")
	public void firstname(String firstname){
		driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(firstname);
		}
	
	@And("^user enters \"(.*)\"$")
	public void Lastname(String Lastname){	
	driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(Lastname);	
	}
	
	@And("^user enters \"(.*)\"$")
	public void Address(String Address){	
		driver.findElement(By.xpath("//textarea[@ng-model='Adress']")).sendKeys(Address);	
	}
	
	@And("^user enters \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void EmailAddress_and_Phone_and_Gender_and_Hobbies(String EmailAddress, String Phone, String Gender, String Hobbies){
		driver.findElement(By.xpath("//input[@ng-model='EmailAdress']")).sendKeys("chris.hemsworth@gmail.com");
		driver.findElement(By.xpath("//input[@ng-model='Phone']")).sendKeys("887004881");
		driver.findElement(By.xpath("//input[@value='Male']")).click();
		System.out.println(driver.findElement(By.xpath("//input[@value='Male']")).isSelected());
		driver.findElement(By.xpath("//input[@id='checkbox1']")).click();
		System.out.println(driver.findElement(By.xpath("//input[@id='checkbox1']")).isSelected());	
	}
	
	@And("^user selects \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void Languages_and_Skills_and_country(String Languages, String Skills, String country){
		driver.findElement(By.xpath("//a[text()='English']")).click();
		
	}

}
