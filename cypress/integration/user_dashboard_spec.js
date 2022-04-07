describe('User Dashboard User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://secure-island-06435.herokuapp.com/api/v1/animals', {fixture: "animal_objects.json"})
      .visit('http://localhost:5050/main');
      cy.get('.card-div')
      .contains('Wyoming Toad')
      .click()
      .url()
      .should('eq', 'http://localhost:5050/details')
  });
  
  it('should have a nav bar', () => {
    cy.get('.tagline')
      .contains('Are they worth it to you?')
  });

  it('should have a nav bar', () => {
    cy.get('.animal-details')
      .contains('WYOMING TOAD')
      .should('be.visible')
  });

  it('should have a phylum', () => {
    cy.get('.scientific-class-div')
      .contains('Phylum: Craniata')
      .should('be.visible')
  });

  it('should have a class', () => {
    cy.get('.scientific-class-div')
      .contains('Class: Amphibia')
      .should('be.visible')
  });

  it('should have a order', () => {
    cy.get('.scientific-class-div')
      .contains('Order: Anura')
      .should('be.visible')
  });
  
  it('should have a family', () => {
    cy.get('.scientific-class-div')
      .contains('Family: Bufonidae')
      .should('be.visible')
  });

  it('should have a genus', () => {
    cy.get('.scientific-class-div')
      .contains('Genus: Anaxyrus')
      .should('be.visible')
  });

  it('should have a species', () => {
    cy.get('.scientific-class-div')
      .contains('Species: Anaxyrus baxteri')
      .should('be.visible')
  });

  it('should have a population', () => {
    cy.get('.threats-info')
      .contains('Currently there are 250 - 2500 individuals in America. Wild population fluctuates and is tenuous with "very little wild breeding to date" (USFWS 2015).')
      .should('be.visible')
  });

  it('should have a threats information', () => {
    cy.get('.threats-info')
      .contains('Historically associated with floodplain ponds along the Big and Little Laramie Rivers; use of lakes may have been limited due to saline conditions; irrigation may have flushed out the lakes and made them more suitable for toads (George Baxter). Currently occurs in the vicinity of lakes and adjacent meadows. Uses rodent burrows for shelter. Eggs and larvae develop in shallow water. Mortenson Lake site is infected with the amphibian chytrid fungus (Batrachochytrium dendrobatidis) (USFWS 2002). This fungus has been implicated in declines and extinctions of amphibian species worldwide. Retrospective analysis shows that the fungus has been present at Mortenson Lake since at least 1989. In addition, chytridiomycosis is the most commonly seen disease in the captive population. Predation, pesticide use, irrigation practices, and lack of genetic diversity may also limit the abundance of Wyoming toads in the Laramie Basin (USFWS 2015). Mortenson Lake has become more saline (and less suitable for toads) as a result of drought-related increases in evaporation (USFWS 2002).')
      .should('be.visible')
  });

  it('should have a back button', () => {
    cy.get('.details-btns')
      .contains('Back')
      .should('be.visible')
  });
});

