/**
 * This script should go to style
 */
const puppeteer = require('./Tests/node_modules/puppeteer')

const delaySecond = async (time) => await new Promise(res => setTimeout(res, 1000 * time));
(async () => {
  const browser = await puppeteer.launch(
    { 
      headless: false,
      // if this is different on your machine, goto chrome://version/ and find the path.
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    }
  )
  try {
    const page = await browser.newPage()
    await page.goto('localhost:3000')
    // console.log(await page.title())
    await delaySecond(15)
  } catch (error) {
    console.log(error)
  }
  await browser.close()
})()