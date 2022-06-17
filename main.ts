import { expect } from 'chai';
import 'mocha';
import { Builder, WebDriver } from 'selenium-webdriver';

import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

describe('Order laptop', () => {
    let driver: WebDriver;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    })

    it('Logins and opens laptop page', async () => {
        await driver.get("https://www.demoblaze.com/");
        let mainPage = await new MainPage(driver);
        mainPage = await mainPage.login();
        mainPage = await mainPage.goToProduct();
        expect(await mainPage.getDriver().getCurrentUrl()).to.equal("https://www.demoblaze.com/prod.html?idp_=12");
    }).timeout(50000);

    it('Orders product and opens cart', async () => {
        let productPage = await new ProductPage(driver);
        productPage = await productPage.orderProduct();
        productPage = await productPage.openCart();
        expect(await productPage.getDriver().getCurrentUrl()).to.equal("https://www.demoblaze.com/cart.html");
    }).timeout(50000);

    it('Makes order', async () => {
        let cartPage = await new CartPage(driver);
        expect(await cartPage.makeOrder()).to.equal(true);
    }).timeout(50000);


    after(async () => {
        await driver.quit();
    });
});