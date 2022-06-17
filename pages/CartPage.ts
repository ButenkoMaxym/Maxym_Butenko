import {By, WebDriver, Locator, until} from "selenium-webdriver";

class CartPage {
    private placeOrderButton: Locator = By.xpath("//*[@id=\"page-wrapper\"]/div/div[2]/button");
    private nameField: Locator = By.id("name");
    private countryField: Locator = By.id("country");
    private cityField: Locator = By.id("city");
    private cardField: Locator = By.id("card");
    private monthField: Locator = By.id("month");
    private yearField: Locator = By.id("year");
    private purchaseButton: Locator = By.xpath("//*[@id=\"orderModal\"]/div/div/div[3]/button[2]");
    private confirmation: Locator = By.xpath("//*[ text() = \"Thank you for your purchase!\" ]");

    private driver: WebDriver;

    constructor(driver: WebDriver){
        this.driver = driver;
    }

    async makeOrder() {
        await this.driver.wait(until.elementLocated(this.placeOrderButton), 5000);
        await this.driver.findElement(this.placeOrderButton).click();

        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.nameField)), 5000);
        await this.driver.findElement(this.nameField).sendKeys("test");
        await this.driver.findElement(this.countryField).sendKeys("test");
        await this.driver.findElement(this.cityField).sendKeys("test");
        await this.driver.findElement(this.cardField).sendKeys(123456789);
        await this.driver.findElement(this.monthField).sendKeys("test");
        await this.driver.findElement(this.yearField).sendKeys(2000);
        await this.driver.findElement(this.purchaseButton).click();

        try {
            await this.driver.wait(until.elementLocated(this.confirmation), 5000);
            return true;
        } catch (error){
            return false;
        }
    }
}

export default CartPage;