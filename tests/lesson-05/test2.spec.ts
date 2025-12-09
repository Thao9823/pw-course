import { test } from "@playwright/test";
test("Product page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/")

    //di chuyển đến page product
    await test.step("Redirect to Product Page", async() => {
    await page.click("//a[@href='02-xpath-product-page.html']");
    })

    //thêm 2 - Sản phẩm 1:
    await test.step("Add product 1", async () => {
    await page.locator("//button[@class='add-to-cart' and @data-product-id='1']").dblclick();
    })
    //await page.locator ("//button[contains(@class, 'add-to-cart') and @data-product-id='2']").dblclick();

    //thêm 3- sản phẩm 2:
    await test.step("Add product 2", async () => {
    for (let i = 1; i <= 3; i++) {
        await page.locator("//button[@class='add-to-cart' and @data-product-id=2]").click();
    }
    })
    //thêm 1- Sản phẩm 3
    await test.step("Add product 3", async () => {
    await page.locator("//button[contains(@class, 'add-to-cart') and @data-product-id='3']").click();
    })
});