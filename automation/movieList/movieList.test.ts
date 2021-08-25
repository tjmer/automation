import {Builder, Capabilities, By} from "selenium-webdriver"
import { beforeAll, afterAll, test } from "@jest/globals"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

let movie = "Bobbert the Builder"
let movieTitle = movie.split(' ').join('')


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('Add a movie', async ()=> {
    let movieName = await driver.findElement(By.xpath('/html/body/main/section/form/input'))

    await movieName.sendKeys(movie)

    await driver.sleep(2000)

    await driver.findElement(By.xpath('/html/body/main/section/form/button')).click()

    await driver.sleep(4000)
})

test('Cross movie name off', async ()=>{
    await driver.findElement(By.xpath('/html/body/main/ul/li/span')).click()

    await driver.sleep(3000)

    await driver.findElement(By.xpath('/html/body/main/ul/li/span')).click()

    await driver.sleep(3000)
})

test('Delete movie from list', async ()=> {

    await driver.sleep(2000)

    await driver.findElement(By.id(movieTitle)).click()

    await driver.sleep(2000)

})