import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  beforeEach(function () {
    loginPage.accessLoginPage()
  })

  it.only('User Info Update - Success', () => {
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-02-28')
    myInfoPage.fillStatus()
    myInfoPage.saveForm
  })

  it.only('Login - Fail', () => {
    loginPage.loginFail(userData.userFail.username, userData.userFail.password)
  })
})