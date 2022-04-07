const cypress = require("cypress");

describe('User Dashboard User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://secure-island-06435.herokuapp.com/api/v1/animals', {fixture: "animal_objects.json"})
      .visit('http://localhost:5050/main');
      cy.get('.card-div')
      .contains('Wyoming Toad')
      .click()

    // cy.intercept('GET', 'https://secure-island-06435.herokuapp.com/api/v1/animal?common_name=Wyoming Toad&element_code=AAABB01220', {fixture: "animal_details.json"})
    //   .visit('http://localhost:5050/details');
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:5050/details');
  });
  
  it('should have a nav bar', () => {
    cy.get('.tagline')
      .contains('Are they worth it to you?')
  });

  it('should have a nav bar', () => {
    cy.get('.animal-details')
      .contains('WYOMING TOAD')
  });

  it('should show three types of species shown', () => {
    cy.get('.scientific-class-div')
      .should('have.length', 7)
      // .contains('Wyoming Toad')
      .should('be.visible')
  });
  // it('should have a phylum', () => {
  //   cy.get('.scientific-classification')
  //   .contains('Phylum: Craniata')
  // });

});


// describe('Pokedex User Flow', () => {
//   beforeEach(() => {
//     cy.intercept('GET', ' https://pokeapi.co/api/v2/pokemon-species/1/', {fixture: "pokeDetails.json"})
//       .visit('http://localhost:3000/generation-i/0');   
//      cy.get('[href="/generation-i"]')
//       .click()
//       .get('[href="/generation-i/0"] > .card-sprite')
//       .click()
//   });
