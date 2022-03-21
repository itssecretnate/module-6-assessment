
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.sleep(2000);
    await (await driver).quit()
})

afterEach(async () => {
    await driver.sleep(500);
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button displays choices div.', async () => {    
    await driver.findElement(By.id('draw')).click();

    const choicesDiv = await driver.findElement(By.id('choices')).isDisplayed();

    expect(choicesDiv).toBe(true)
})

test('Click Add to Duo', async () => {
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click();
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[2]')).click();
    
    const playerDuo = await driver.findElement(By.id('player-duo')).isDisplayed();

    expect(playerDuo).toBe(true)
})