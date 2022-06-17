import {By, WebDriver, Locator, until} from "selenium-webdriver";



class MainPage {
    private usernameField: Locator = By.xpath("//*[@id=\"loginusername\"]");
    private passwordField: Locator = By.xpath("//*[@id=\"loginpassword\"]");
    private loginButton: Locator = By.id("login2");
    private submitButton: Locator = By.xpath("//*[@id=\"logInModal\"]/div/div/div[3]/button[2]");
    private catalog: Locator = By.xpath("/html/body/div[5]/div/div[1]/div/a[3]");
    private laptopProduct: Locator = By.xpath("//*[ text() = \"Dell i7 8gb\" ]");


    private driver: WebDriver;
    public getDriver() : WebDriver{
        return this.driver;
    }

    constructor(driver: WebDriver){
        this.driver = driver;
    }

    async login(){
        await this.driver.findElement(this.loginButton).click();

        await this.driver.wait(until.elementLocated(this.usernameField), 5000);
        await this.driver.wait(until.elementLocated(this.passwordField), 5000);
        await this.driver.wait(until.elementLocated(this.submitButton), 5000);

        await this.driver.findElement(this.usernameField).sendKeys("maxym");
        await this.driver.findElement(this.passwordField).sendKeys("123");
        await this.driver.findElement(this.submitButton).click();

        return this;
    }

    async goToProduct(){
        try {
            await this.driver.findElement(this.catalog).click();
        } catch (error) {
            await this.driver.findElement(this.catalog).click();
        }

        await this.driver.wait(until.elementLocated(this.laptopProduct), 5000);
        await this.driver.findElement(this.laptopProduct).click();

        return this;
    }

}

export default MainPage;