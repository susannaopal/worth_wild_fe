// https://docs.cypress.io/api/introduction/api.html

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
          // .click()
          .should('be.visible')
      });

      it('should see a button for a user to login',() => {
        cy.get('body')
          .contains('Log In')
          // .click()
          .should('be.visible')
      });

    it('should see a mission statement', () => {
       cy.get('body')
          .get('p')
          .contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in. Pulvinar etiam non quam lacus suspendisse. Mauris vitae ultricies leo integer. Tincidunt arcu non sodales neque sodales ut. Eget est lorem ipsum dolor. Eu consequat ac felis donec et odio pellentesque diam. Enim ut tellus elementum sagittis vitae et leo. Ut pharetra sit amet aliquam id diam. Tortor posuere ac ut consequat semper viverra nam. Semper viverra nam libero justo. Viverra maecenas accumsan lacus vel facilisis. Mauris ultrices eros in cursus turpis massa. Dui accumsan sit amet nulla.')
          .should('be.visible')
    });
})