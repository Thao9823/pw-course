import { test } from "@playwright/test";
test("Todo page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");

    //Di chuyển đến page TODO
    await page.click("//a[@href='03-xpath-todo-list.html']");

    //Thêm mới 100 todo item có nội dung “Todo <i>”
    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill("Todo " + `${i}`);
        await page.locator("//button[@id='add-task']").click();
    }
    // Xoá các todo có số lẻ
    for (let i = 1; i <= 100; i+= 2) {
        page.once ('dialog', async dialog => dialog.accept());
        await page.click(`//li[.//span[text()="Todo ${i}"]]//button[text()="Delete"]`);
    }
})