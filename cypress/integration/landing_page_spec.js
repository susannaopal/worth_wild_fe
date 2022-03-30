// https://docs.cypress.io/api/introduction/api.html

// describe("My First Test", () => {
//   it("visits the app root url", () => {
//     cy.visit("http://localhost:5050/");
//     // cy.contains("h1", "You did it!");
//   });
// });


describe('Landing Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5050/');
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:5050/');
  })

  it('should see a logo', () => {

  })
})