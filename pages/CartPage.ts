import { Page,Locator,expect } from "@playwright/test";

export class cartpage
{
    productname:Locator;
    itemdiscription:Locator;
    itemprice:Locator;
    constructor(private page:Page)
    {
        this.productname=page.locator(".inventory_item_name");
        this.itemdiscription=page.locator(".inventory_item_desc");
        this.itemprice=page.locator(".inventory_item_price");
        
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
}