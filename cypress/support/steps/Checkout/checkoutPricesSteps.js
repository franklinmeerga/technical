import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";


const converterPrices = require('../../../support/pages/CheckoutPrices/CheckoutPricesElements').ELEMENTS

import data  from '../../../fixtures/data.json'

//SCENARIO 1
Given('the user is on the home page', () => {
    cy.visit('/')
})

When('the user shooses a specific product', () => {
    cy.get(converterPrices.searchbar()).type(data.product2_test);
    cy.get(converterPrices.searchbutton()).click();
    cy.get(converterPrices.product2_button()).click()  
})

When('the user chooses  the exchange rate that he wants', () => {
    cy.get(converterPrices.dropdown_toggle()).click();
    cy.contains(data.Pound_Sterling).click();
    
})

Then('the user should see the exchange rate selected', () => {
    cy.get(converterPrices.button_cart_text()).should('include.text', data.pound_sterling_symbol)
    .and('not.include.text', [data.euro_symbol, data.dollar_symbol])

})

//SCENARIO 2
Then('the user should see the numeric value of the exchange rate that he chose', () => {
    cy.get(converterPrices.button_cart_text()).should('include.text', data.numericValue_product2_pound)
 })

 //SCENARIO 3
 const API_KEY = Cypress.env('API_KEY')
 const USD = data.USD
 const EUR = data.EUR
 const GBP = data.GBP
 const PRICE = 122
 const url_base = `https://api.apilayer.com/exchangerates_data/convert?to=${GBP}&from=${USD}&amount=${PRICE}`


Then('the numeric value of the API and web site should be the same', () => {
    cy.request({
        method: 'GET',
        url: url_base,
        headers: { 'apikey': API_KEY }
    }).should(({status, body}) => {
        const {success, query, info, result} = body

        expect(status).to.eq(200)
        expect(result).to.eq(105.70)
    })
 })