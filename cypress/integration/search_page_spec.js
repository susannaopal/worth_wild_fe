describe('Search Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://secure-island-06435.herokuapp.com/api/v1/animals', {fixture: "animal_objects.json"})
      .visit('http://localhost:5050/main');
  });

   it('should see a tagline', () => {
    cy.get('.logo-tagline-div')
      .contains('Are they worth it to you?')
      .should('be.visible');
  });

  it('should see a login button on the nav', () => {
    cy.get('body')
      .contains('Login')
      .should('be.visible')
  });

  it('should see an animal or vegetation of the day', () => {
    cy.get('body')
      .get('.feature-info-div')
      .get('h3')
      .contains('Animal of the Day')
      .should('be.visible')
  });
  
    it('should see a search bar', () => {
      cy.get('body')
        .get('.search-bar')
        .should('be.visible')
    });

  it('should see the featured organization', () => {
     cy.get('body')
      .get('.feature-info-div')
      .get('h3')
      .contains('Featured Organization')
      .get('.wwf-logo')
      .should('be.visible')
  });

  it('should see a title for the Common Name', () => {
    cy.get('body')
      .get('.labels-container')
      .contains('Common Name')
      .should('be.visible')
  });

   it('should see a title for the Scientific Name', () => {
    cy.get('body')
      .get('.labels-container')
      .contains('Scientific Name')
      .should('be.visible')
  });

   it('should see a title for the Conservation Name', () => {
    cy.get('body')
      .get('.labels-container')
      .contains('Conservation Status')
      .should('be.visible')
  });

  it('should show three types of species shown', () => {
      cy.get('.animal-card-link')
        .should('have.length', 3)
        .contains('Wyoming Toad')
        .should('be.visible')
  });
});