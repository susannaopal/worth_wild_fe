describe('User Dashboard User Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://secure-island-06435.herokuapp.com/api/v1/dashboard', {fixture: "user_object.json"})
      .visit('http://localhost:5050/user-profile');
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:5050/user-profile');
  });
});

