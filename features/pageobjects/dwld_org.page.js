class Download{
    get dwld() {return $("//a[@href='/en/resources/e-books/thefutureofhr/']//button") }
    // /html/body/div/div/div/section[2]/div/div/div[1]/div/div[2]/a/button
    async clickDownload(){
        (await this.dwld).waitForClickable({timeout:3000});
        (await this.dwld).click()
       
    }
}

module.exports = new Download();