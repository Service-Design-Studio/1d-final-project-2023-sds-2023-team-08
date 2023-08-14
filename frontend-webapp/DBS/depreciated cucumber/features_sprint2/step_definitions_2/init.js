const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber")
const { Builder } = require("selenium-webdriver")
var chrome = require("selenium-webdriver/chrome")
// var options = new chrome.Options().headless();
var options = new chrome.Options()

const width = 800
const height = 999
setDefaultTimeout(60 * 1000)

const initDriver = () => {
  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build()
  driver.manage().window().setRect({ width: width, height: height })
  return driver
}

Before(async function () {
  //declaring global variable for each scenario
  global.driver = initDriver()
  // global.baseUrl = "http://localhost:3000/"
  global.baseUrl = "https://dbsservice-zwrzqgoagq-as.a.run.app"
  global.parentNumber = Math.floor(Math.random() * 100000000)
  global.childNumber = Math.floor(Math.random() * 100000000)

  await driver.get(baseUrl)
  await driver.sleep(500)
  await driver.executeScript(function () {
    localStorage.clear()
  })
})

After(async function () {
  await driver.quit()
})