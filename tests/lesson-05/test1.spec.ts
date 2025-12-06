import { test } from "@playwright/test";
import { validateHeaderValue } from "http";
test("User Registration", async ({ page }) => {
    await test.step("Navigation to User Register Page", async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    })
    //hover textbox username
    await test.step("Hover Username", async () => {
        await page.locator("//input[@id='username']").hover();
    })
    //input username
    await test.step("Input Username", async () => {
        await page.locator("//input[@id='username']").fill("tester1");
    })
    //hover email
    await test.step("Hover Email", async () => {
        await page.locator("//input[@id='email']").hover();
    })
    //input email
    await test.step("Input email", async () => {
        await page.locator("//input[@id='email']").pressSequentially("test1@gmail.com"),
        {
            delay: 100,
        };  
    })
    // select radio button
    await test.step("Select Gender", async () => {
        await page.locator("//input[@id='female']").check();
    })
    // select checkbox
    await test.step("select Hobbies", async () => {
        await page.locator ("//input[@id='traveling']").check();
        await page.locator ("//input[@id='cooking']").check();
    })
    // select interests
    await test.step("Select Interests", async () => {
        await page.locator("//select[@id='interests']").selectOption ({label: "Music"})
    })
    // select country
    await test.step("Select country", async () => {
        await page.locator("//select[@id='country']").selectOption ({label: "Canada"})
    })
    // input date of birth
    await test.step("Input Date Of Birth", async () => {
        await page.locator("//input[@id='dob']").fill("2025-12-08")
    })
    // select file
    await test.step("Select Profile Picture", async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/lesson-5.txt")
    })
    // Input textarea Biography
    await test.step("Input Biography Textarea", async() => {
        await page.locator("//textarea[@id='bio']").fill("Tuyển sinh khoá học Playwright Master Class")
    })
    // Input rate
    await test.step("Input Rate", async () => {
        await page.locator("//input[@id='rating']").fill("6")
    })
    // Input color
    await test.step("Input Color", async() => {
        await page.locator("//input[@id='favcolor']").fill("#333333")
    })
    //hover Newsletter
    await test.step("Hover Newsletter", async () => {
        await page.locator("//div[@class='tooltip']").hover();
    })
    // Select checkbox Newsletter
    await test.step("Select Checkbox Newsletter", async() => {
        await page.locator("//input[@id='newsletter']").check()
    })
    // Select Enable Feature (toggle)
    await test.step("Select Enable Feature", async() => {
        await page.locator("//label[@class='switch']").click();
    })
    // Select Star Rating
    await test.step("Select Star Rating", async() => {
        await page.locator("//div[@id='starRating']").click();
    })
    //click button Register
    await test.step("Click Register", async() => {
        await page.locator("//button[@type='submit']").click();
    })
})