$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucmbertest1.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test Scenario",
  "description": "",
  "id": "login-test-scenario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TEST"
    },
    {
      "line": 1,
      "name": "@AutomationDemoSite"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Skip sign in page",
  "description": "",
  "id": "login-test-scenario;skip-sign-in-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    },
    {
      "line": 4,
      "name": "@SkipSignin"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Title of login page is automation demo",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click skip sign in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.userLogin()"
});
formatter.result({
  "duration": 21957136800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.titleofloginpage()"
});
formatter.result({
  "duration": 14557900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitions.skipsignin()"
});
formatter.result({
  "duration": 6318633500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Registerion form",
  "description": "",
  "id": "login-test-scenario;registerion-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@test2"
    },
    {
      "line": 11,
      "name": "@RegistrationForm"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Register the customer details",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the page displays resgister form",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Fill in all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters \"\u003cFirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cLast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003cEmail address\u003e\" and \"\u003cPhone\u003e\" and \"\u003cGender\u003e\" and \"\u003cHobbies\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters \"\u003cLanguages\u003e\" and selects \"\u003cSkills\u003e\" and select \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select \"\u003cSelectCountry\u003e\" from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "fill in DOB \"\u003cYear\u003e\" and \"\u003cMonth\u003e\" and \"\u003cDay\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\u003cConfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "users clicks \u003cSubmit\u003e button after filling all the above details",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-test-scenario;registerion-form;",
  "rows": [
    {
      "cells": [
        "First name",
        "Last name",
        "Address",
        "Email address",
        "Phone",
        "Gender",
        "Hobbies",
        "Languages",
        "Skills",
        "country",
        "SelectCountry",
        "Year",
        "Month",
        "Day",
        "Password",
        "Confirm password"
      ],
      "line": 29,
      "id": "login-test-scenario;registerion-form;;1"
    },
    {
      "cells": [
        "Robert",
        "Brownley",
        "a7a, tvs nagar",
        "robert@gmail.com",
        "1236547890",
        "male",
        "cricket",
        "English",
        "Android",
        "India",
        "India",
        "1995",
        "January",
        "13",
        "Black@Panther",
        "Black@Panther"
      ],
      "line": 30,
      "id": "login-test-scenario;registerion-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Registerion form",
  "description": "",
  "id": "login-test-scenario;registerion-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@RegistrationForm"
    },
    {
      "line": 11,
      "name": "@test2"
    },
    {
      "line": 1,
      "name": "@AutomationDemoSite"
    },
    {
      "line": 1,
      "name": "@TEST"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Register the customer details",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the page displays resgister form",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Fill in all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters \"Robert\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters \"Brownley\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters \"a7a, tvs nagar\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters \"robert@gmail.com\" and \"1236547890\" and \"male\" and \"cricket\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user enters \"English\" and selects \"Android\" and select \"India\"",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select \"India\" from drop down",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "fill in DOB \"1995\" and \"January\" and \"13\"",
  "matchedColumns": [
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters \"Black@Panther\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enters \"Black@Panther\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "users clicks \u003cSubmit\u003e button after filling all the above details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.registerpage()"
});
formatter.result({
  "duration": 52600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "robert@gmail.com\" and \"1236547890\" and \"male",
      "offset": 13
    },
    {
      "val": "cricket",
      "offset": 64
    }
  ],
  "location": "stepDefinitions.firstname_and_lastname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "SwitchTo validation",
  "description": "",
  "id": "login-test-scenario;switchto-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@test3"
    },
    {
      "line": 32,
      "name": "@SwitchToValidations"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "On Automation demo site web page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "The page has \u003cswitchTo\u003e tab dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click \u003cSwitchTo\u003e drop down and Click \u003cWindows\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "page redirected to \u003cwindows\u003e page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Click \u003cOpen new seperate windows\u003e and Click \u003cClick\u003e button to open a new window with some specification",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "New window poped-up",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Maximize the pop-up window to view the contents clearly",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Check the title of the pop-up page and validate the same",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Close the pop-up window page after validating the title",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});