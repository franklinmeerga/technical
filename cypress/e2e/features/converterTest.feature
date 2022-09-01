Feature:  converter prices Test

    the objetive this feature is to create three test to validate the converter prices of the some products

    Scenario: validate the symbol os the  current  money
        Given  the user is on the home page
        When the user shooses a specific product
        When the user to change the exachange rates of the product
        Then the user should see the exchange rate selected
        
        