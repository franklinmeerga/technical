Feature:  converter prices Test

    the objetive this feature is to create three test to validate the converter prices of the some product
     
    Scenario: validate the symbol of the  exchange rate selected  money
        Given  the user is on the home page
        When the user shooses a specific product
        When  the user chooses  the exchange rate that he wants
        Then the user should see the exchange rate selected
     
    Scenario: validate the numeric value of the exchange rate 
        Given  the user is on the home page
        When the user shooses a specific product
        When  the user chooses  the exchange rate that he wants
        Then the user should see the numeric value of the exchange rate that he chose
    
    Scenario: to validate the numeric value of the API and web site
        Given  the user is on the home page
        When the user shooses a specific product
        When  the user chooses  the exchange rate that he wants
        Then the numeric value of the API and web site should be the same
 
        