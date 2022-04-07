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
      .get('p')
      .contains('Worth Wild\'s mission is to bring awareness to North American wild life animal and plant species that are critically endangered and underrepresented. They need our help before it is too late and they are lost to us forever. To work towards this mission, we created an application that allows users to view local animals and plants to learn more about them; including their endangered status.')
      .should('be.visible')
    });
});