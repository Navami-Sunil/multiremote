class Email{
    get eml() { return $("//input[@id='Form_getForm_Email']") }
    get clk() { return $("//input[@id='Form_getForm_action_submitForm']")}
    get fname() {return $("//input[@id='Form_getForm_FullName']")}
    get cntry(){return $("//select[@id='Form_getForm_Country']")}
    get cname(){return $("//option[@value='Albania']")}

    async clickEmail(){
        await this.eml.setValue("JohnDoe@gmail.com");
        await this.eml.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(3000)
    }
    async clickFName(){
        await this.fname.setValue("Navami")
    }
    async country(){
        await this.cntry.click();
        browser.pause(3000)
        await this.cname.click();
        await browser.pause(20000);
        await this.fname.setValue("Navami")
        await this.clk.click();
        //await browser.pause(4000);
    }
    
}
module.exports = new Email();