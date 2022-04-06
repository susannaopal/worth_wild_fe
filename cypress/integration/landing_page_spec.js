describe('Landing Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5050/');
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:5050/');
  });

  it('should see a logo', () => {
    cy.get('body')
      .find('img')
      .should('be.visible')
      });

      it('should see a button for a guest',() => {
        cy.get('body')
          .contains('Guest')
          .should('be.visible')
      });

      it('should see a button for a user to login',() => {
        cy.get('body')
          .contains('Log In')
          .should('be.visible')
      });

    it('should see a mission statement', () => {
       cy.get('main > body')
        cy.get('p')
          .contains('The mission of Worth Wild is to bring awareness to North American wildlife, flora, and fauna that are critically endangered and underrepresented. To work towards this mission, we created an application that allows users to view local plants and animals and learn more about them.')
          .should('be.visible')
    });
})