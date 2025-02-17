import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  beforeEach(function () {
    loginPage.accessLoginPage()
  })

  const selectorsList = {
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
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
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
    // loginPage.loginFail(userData.userFail.username, userData.userFail.password)
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCedentialAlert)
  })
})