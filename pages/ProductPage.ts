import {By, WebDriver, Locator, until} from "selenium-webdriver";


class ProductPage {
    private orderButton: Locator = By.xpath("//*[@id=\"tbodyid\"]/div[2]/div/a");
    private cart: Locator = By.xpath("//*[@id=\"cartur\"]");

    private driver: WebDriver;
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    public getDriver() : WebDriver{
        return this.driver;
    }


    async orderProduct(){
        await this.driver.wait(until.elementLocated(this.orderButton), 5000);
        await this.driver.findElement(this.orderButton).click();

        await this.driver.wait(until.alertIsPresent(), 5000);
        await this.driver.switchTo().alert().accept();

        return this;
    }

    async openCart(){
        await this.driver.findElement(this.cart).click();

        return this;
    }
}

export default ProductPage;