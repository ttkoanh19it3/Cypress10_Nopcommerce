Feature: login functionality
  Scenario Outline: Check login is successful with valid credentials
   Given user is on login page and user is a user of nopCommerce
   When user enters email as '<email>' and password as '<password>' 
   And clicks on login button
   Then user should be redirected to the home page of nopCommerce

  Examples: 
     | email | password |
     | Adminnnnnn@gmail.com   | Admin123 |
     | Adminnnnn1@gmail.com   | Admin123 |

    
