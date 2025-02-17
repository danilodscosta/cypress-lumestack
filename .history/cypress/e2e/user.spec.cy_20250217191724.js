import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {

  beforeEach(function () {
    loginPage.accessLoginPage()
  })

  const selectorsList = {
    sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]',
    genericCombobox: '[tabindex="0"]',
    secondItemCombobox: '.oxd-select-dropdown > :nth-child(2)',
    thirdItemCombobox: '.oxd-select-dropdown > :nth-child(3)',
    dateCloseButton: '.--close',
    submitButton: '[type="submit"]',
  }

  it.only('User Info Update - Success', () => {
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // cy.get(selectorsList.dashboardGrid)

    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('IDTest')
    // cy.get(selectorsList.genericField).eq(4).clear().type('OtherID')
    // cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    // cy.get(selectorsList.genericField).eq(6).clear().type('2023-13-10')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated')

    // cy.get(selectorsList.genericCombobox).eq(0).click()
    // cy.get(selectorsList.secondItemCombobox).click()

    // cy.get(selectorsList.genericCombobox).eq(1).click()
    // cy.get(selectorsList.thirdItemCombobox).click()
  })

  it('Login - Fail', () => {
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCedentialAlert)
  })
})