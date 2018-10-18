/// <reference types="Cypress" />

context('action.js function tests', () => {
  beforeEach(() => {
    cy.visit("/../index.html"); //RESET
  });

  it('getAction returns a value between 0 - 4', () => {
     cy
      .window().invoke('getAction')
      .should('be.greaterThan',-1)
      .and('be.lessThan',5);
  });

  it('actionChoose returns a value between 0 - 4', () => {
    cy
     .window().invoke('actionChoose(0)')
     .should('be.greaterThan',-1)
     .and('be.lessThan',5);
  });




}); //context('action.js function tests', () => {
