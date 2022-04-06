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
    cy.get('feature-info-div')
  })

});