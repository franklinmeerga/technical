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
    //cy.get('#form-currency > .btn-group > .dropdown-toggle > .fa').contains('li','€ Euro')
    //cy.get('#form-currency > .btn-group > .dropdown-toggle').contains('EUR')
    //cy.get('#form-currency > .btn-group > .dropdown-menu').contains('€ Euro').click({ force: true })
    //cy.wait(10000)
    //cy.get(':nth-child(1) > .currency-select').click({ force: true })
    //cy.get('.dropdown-menu').select(0)
    //cy.get('#form-currency > .btn-group > .dropdown-menu').eq(0).should('contain.text','€ Euro')
    //cy.get('#form-currency > .btn-group > .dropdown-menu').eq(0).should('contain.text','€ Euro')
    //cy.get('#form-currency > .btn-group > .dropdown-toggle').click('center')
    //cy.get('#form-currency > .btn-group > .dropdown-menu').contains('ul','€ Euro').click({ force: true })
    //cy.get('#form-currency > .btn-group > .dropdown-toggle').contains('ul','€ Euro')
    //cy.get('#form-currency > .btn-group > .dropdown-toggle').click();
    cy.get(converterPrices.dropdown_toggle()).click();

    //cy.contains('£ Pound Sterling').click();
    cy.contains(data.Pound_Sterling).click();
    
})

Then('the user should see the exchange rate selected', () => {
    //cy.get('.price-tax').should('include.text','£')
    cy.get(converterPrices.button_cart_text()).should('include.text', data.pound_sterling_symbol)
    .and('not.include.text', [data.euro_symbol, data.dollar_symbol])

})

//SCENARIO 2
 Then('the user should see the numeric value of the exchange rate that he chose', () => {
    cy.get(converterPrices.button_cart_text()).should('include.text', data.numericValue_product2_pound)
 })