import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {
    beforeEach(() => {
        loginPage.accessLoginPage()
    })

    it('Login - Fail', () => {
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()
    })

    it('Login - Success', () => {
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
      })
})
