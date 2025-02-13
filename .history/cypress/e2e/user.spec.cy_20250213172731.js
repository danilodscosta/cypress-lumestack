import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  beforeEach(function () {
    cy.visit('/auth/login')
  })

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCedentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dataField: '[placeholder="yyyy-dd-mm"]'
  }

  it.only('User Info Update - Success', () => {
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)

    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('IDTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherID')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    // cy.get(selectorsList.dataField).clear().type('2025/13/02')
  })

  it('Login - Fail', () => {
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCedentialAlert)
  })
})