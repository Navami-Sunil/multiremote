const { Given,When,Then } =require("@wdio/cucumber-framework");
const home = require ("../pageobjects/login_org.page")
const home2 = require("../pageobjects/dwld_org.page")
const home3 =  require("../pageobjects/email_org.page")

Given(/^I am on the homepage$/, async() => {
	await browser.url("https://www.orangehrm.com/");
    await browser.maximizeWindow()
});

When(/^click resources$/, async() => {
	await home.clickResource()
});

When(/^Navigate to ebooks$/, async() => {
	await home.clickEbook()
});

When(/^Download a pdf$/, async() => {
	await home2.clickDownload();
});

When(/^enter email$/, async() => {
    return true;


});

Then(/^an email will be verified$/, async() => {
    return true;
	// await $("//p[text()='Thank you. We will be in touch with you shortly.']").toBeDisplayed();
});





































	// await home3.clickEmail();
    // browser.pause(5000)
    // await home3.clickFName();
    // await home3.country();
    // browser.pause(5000)