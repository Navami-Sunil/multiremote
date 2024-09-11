let res = "//a[text()='Resources']";
class homePage{
    get resource() {return $("//a[text()='Resources']")}
    get Ebook(){ return $("//a[text()='eBooks'][1]")}
    

    async clickResource() {
        await this.resource.moveTo(res)
        //(await this.resource).click()
    }
    async clickEbook(){
        await this.Ebook.click();
       
    }
}
module.exports=new homePage();