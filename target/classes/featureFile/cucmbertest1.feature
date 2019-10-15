@TEST @AutomationDemoSite
Feature: Login Test Scenario

@test1 @SkipSignin
Scenario: Skip sign in page

Given Login page
When Title of login page is automation demo 
Then click skip sign in

@test2 @RegistrationForm
Scenario Outline: Registerion form

Given Register the customer details
When the page displays register form  
Then Fill in all the details 
And user enters "<First name>"
And user enters "<Last name>"
And user enters "<Address>"
And user enters "<Email address>" and "<Phone>" and "<Gender>" and "<Hobbies>" 
And user enters "<Languages>" and selects "<Skills>" and select "<country>"
And select "<SelectCountry>" from drop down
And fill in DOB "<Year>" and "<Month>" and "<Day>" 
And user enters "<Password>"
And user enters "<Confirm password>"
Then users clicks <Submit> button after filling all the above details

Examples: 
|First name|Last name|Address|Email address|Phone|Gender|Hobbies|Languages|Skills|country|SelectCountry|Year|Month|Day|Password|Confirm password|
|Robert|Brownley|a7a, tvs nagar|robert@gmail.com|1236547890|male|cricket|English|Android|India|India|1995|January|13|Black@Panther|Black@Panther|

@test3 @SwitchToValidations
Scenario: SwitchTo validation

Given On Automation demo site web page
When The page has <switchTo> tab dropdown
Then Click <SwitchTo> drop down and Click <Windows>
When page redirected to <windows> page 
Then Click <Open new seperate windows> and Click <Click> button to open a new window with some specification
When New window poped-up 
Then Maximize the pop-up window to view the contents clearly 
Then Check the title of the pop-up page and validate the same 
Then Close the pop-up window page after validating the title  
