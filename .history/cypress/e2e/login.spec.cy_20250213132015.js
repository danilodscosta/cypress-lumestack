describe('Orange HRM Tests', () => {
  
  beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCedentialAlert: "[role='alert']"
  }

    it('Login - Success', () => {
      cy.get(selectorsList.usernameField).type('Admin')
      cy.get(selectorsList.passwordField).type('admin123')
      cy.get(selectorsList.loginButton).click()
      cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
      cy.get(selectorsList.dashboardGrid).contains('Dashboard')
    })
    
    it('Login - Fail', () => {
      cy.get(selectorsList.usernameField).type('Teste')
      cy.get(selectorsList.passwordField).type('Teste')
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCedentialAlert)
    })
})