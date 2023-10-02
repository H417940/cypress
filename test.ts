import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

/// <reference types="cypress-xpath" />
Given("Login as {string}", (username: string) => {
    cy.visit("/cypress/security");
    cy.get("#form_user").type(username);
    cy.get("#form_login").click();
    cy.url().should('eq', Cypress.config().baseUrl + '/order-form/dashboard')
})

Then("Text Visible {string}", (text: string) => {
    cy.contains(text).should('be.visible');
})

Then("Text Not Visible {string}", (text: string) => {
    cy.contains(text).should('not.be.visible');
})

When("Click on {string}", (xpath: string) => { 
    cy.xpath(xpath).click();
})

Given("Load submitter info data", () => {
    cy.fixtureSubmitterInfoLoad();
})

Given("Load customer info data", () => {
    cy.fixtureCustomerInfoLoad();
})

Given("Load shipping info data", () => {
    cy.fixtureShippingInfoLoad();
})

Given("Load Order type new Non SAP Affiliate", () => {
    cy.fixtureorderTypeNewNonSapAffiliateLoad();
})

Given("Load Order type new SAP Project", () => {
    cy.fixtureorderTypeNewSapProjectLoad();
})

Given("Load Order type new SAP SVC Order", () => {
    cy.fixtureorderTypeNewSapSvcOrderLoad();
})

Then("Add product to cart New {string} qty {string}", (product: string, quantity: number) => {
    cy.addProductToCartNew(product, quantity);
})

Given("Load Order type expansions Non SAP Affiliate", () => {
    cy.fixtureorderTypeExpansionsNonSapAffiliateLoad();
})

Given("Load Order type expansions SAP Project", () => {
    cy.fixtureorderTypeExpansionsSapProjectLoad();
})

Given("Load Order type expansions SAP SVC Order", () => {
    cy.fixtureorderTypeExpansionsSapSvcOrderLoad();
})

Then("Add product to cart Expansions {string} qty {string} system number {string}", (product: string, quantity: number, systemNumber: string|null) => {
    cy.addProductToCartExpansions(product, quantity, systemNumber);
})
//
Given("Load Order type Downgrades Non SAP Affiliate", () => {
    cy.fixtureorderTypedowngradeNonSapAffiliateLoad();
})

Given("Load Order type Downgrades SAP Project", () => {
    cy.fixtureorderTypedowngradeSapProjectLoad();
})

Given("Load Order type Downgrades SAP SVC Order", () => {
    cy.fixtureorderTypedowngradeSapSvcOrderLoad();
})

Then("Add product to cart Downgrades {string} qty {string} system number {string}", (product: string, quantity: number, systemNumber: string|null) => {
    cy.addProductToCartDowngrades(product, quantity, systemNumber);
})
//
Given("Load Order type NON-SESP Non SAP Affiliate", () => {
    cy.fixtureorderTypeNon_SESPNonSapAffiliateLoad();
})

Given("Load Order type NON-SESP SAP Project", () => {
    cy.fixtureorderTypeNon_SESPSapProjectLoad();
})

Given("Load Order type NON-SESP SAP SVC Order", () => {
    cy.fixtureorderTypeNon_SESPSvcOrderLoad();
})

Then("Add product to cart NON-SESP {string} qty {string} system number {string}", (product: string, quantity: number, systemNumber: string|null) => {
    cy.addProductToCartNONSESPupgrade(product, quantity, systemNumber);
})
//
Given("Load Order type SESP Non SAP Affiliate", () => {
    cy.fixtureorderTypeSESPNonSapAffiliateLoad();
})

Given("Load Order type SESP SAP Project", () => {
    cy.fixtureorderTypeSESPSapProjectLoad();
})

Then("Add product to cart SESP {string} qty {string} system number {string}", (product: string, quantity: number, systemNumber: string|null) => {
    cy.addProductToCartSESPupgrade(product, quantity, systemNumber);
})