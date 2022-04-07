describe('Login Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5050/login');
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:5050/login');
  });

  it('should see a form', () => {
    cy.get('form')
      .should('be.visible')
  });

  it('should be able to see a username and password input on the form', () => {
    cy.get('form')
      .get(':nth-child(1) > input')
      .type('bpeterson')
      .should('be.visible')
      .get(':nth-child(2) > input')
      .wait(200)
      .type('password')
      .should('be.visible')
      .get("[type='submit']")
      .click()
      .url()
      .should('eq', 'http://localhost:5050/main')
  });

  it('should display a message if not all fields are filled in', () => {
    cy.get('form')
      .get(':nth-child(1) > input')
      .type('bpeterson')
      .get("[type='submit']")
      .click()
      .get('p')
      .contains('Please fill out both fields in order to login!')
  })

  it('should see a back button', () => {
    cy.get('.login-submit-div > :nth-child(1)')
      .contains('Back')
      .should('be.visible')
      .click()
  });

  it('should be able to see a login button', () => {
    cy.get('[type="submit"]')
      .contains('Login')
      .should('be.visible')
      .click()
  })

  it('should be able to click a button to register and create a new account', () => {
    const newUser = {
          username: 'testUser',
          email: 'test@test.com',
          first_name: 'Test',
          last_name: 'Test'
        }
    cy.intercept('https://secure-island-06435.herokuapp.com/api/v1/users', {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json"
          }
        })
    cy.get('.button-div > :nth-child(2)')
      .contains('Register')
      .should('be.visible')
      .click({ force: true })
      .wait(300)
      .get('[placeholder="First Name"]')
      .type("Test")
      .get('[placeholder="Last Name"]')
      .type("Test")
      .get('[placeholder="Email"]')
      .type("test@test.com")
      .get('[placeholder="Username"]')
      .type("testUser")
      .get('[placeholder="Password"]')
      .get('.modal-btn > [type="submit"]')
      .click()
  });
  
  it('should not be able to create a new account if not all fields are filled in', () => {
    cy.get('.button-div > :nth-child(2)')
      .contains('Register')
      .should('be.visible')
      .click({ force: true })
      .wait(300)
      .get('[placeholder="First Name"]')
      .type("Test")
      .get('.modal-btn > [type="submit"]')
      // .should("be.disabled")
  })
});