import { Page,Locator,expect } from "@playwright/test";

export class cartpage
{
    productname:Locator;
    itemdiscription:Locator;
    itemprice:Locator;
    yourcarttext:Locator
    QTYtext:Locator;
    desctext:Locator;
    contishopbtn:Locator;
    constructor(private page:Page)
    {
        this.productname=page.locator(".inventory_item_name");
        this.itemdiscription=page.locator(".inventory_item_desc");
        this.itemprice=page.locator(".inventory_item_price");
        this.yourcarttext=page.locator(".title");
        this.QTYtext=page.locator(".cart_quantity_label");
        this.desctext=page.locator(".cart_desc_label");
        this.contishopbtn=page.locator("#continue-shopping");
        
    }
    async ProductName()
    {
        await this.productname.innerText();
    }
    async ProductDiscription()
    {
        await this.itemdiscription.innerText();
    }
    async Productitemprice()
    {
        this.itemprice.innerText();
    }
    async ClickonContinueShoppingbutton()
    {
        await this.contishopbtn.click();

    }
}