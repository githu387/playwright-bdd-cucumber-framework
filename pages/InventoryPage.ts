import { Page,Locator,expect} from "@playwright/test";

export class inventrypage
{
    backpack:Locator;
    cartlink:Locator;
    cartcount:Locator;
    bikelight:Locator;
    boltTshirt:Locator;
    fleeceJacket:Locator;
    labonesie:Locator;
    redTshirt:Locator;
    removebackpackk:Locator;
    removebikelight:Locator;
    removeboltTshirt:Locator;
    removefleecejacket:Locator;
    removelabsonesie:Locator;
    removeredTshirt:Locator;
    addallproducts:Locator;
    removeallproducts:Locator;
    twitterpage:Locator;
    facebookpage:Locator;
    linkedInpage:Locator;
    backpacklink:Locator;
    productlargename:Locator;
    productdesclarge:Locator;
    productdetailprice:Locator;
    productimg:Locator;
    bikelightlink:Locator;
    boltTshirtlink:Locator;
    Addproduct:Locator;
    RemoveProduct:Locator;
    fleecejacketlink:Locator;
    labsonesielink:Locator;
    redTshirtlink:Locator;

    constructor(private page:Page)
    {
        this.backpack=page.locator("#add-to-cart-sauce-labs-backpack");
        this.cartlink=page.locator(".shopping_cart_link");
        this.cartcount=page.locator(".shopping_cart_badge");
        this.bikelight=page.locator("#add-to-cart-sauce-labs-bike-light");
        this.boltTshirt=page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.fleeceJacket=page.locator("#add-to-cart-sauce-labs-fleece-jacket");
        this.labonesie=page.locator("#add-to-cart-sauce-labs-onesie");
        this.redTshirt=page.locator("button[id='add-to-cart-test.allthethings()-t-shirt-(red)']");
        this.removebackpackk=page.locator("#remove-sauce-labs-backpack");
        this.removebikelight=page.locator("#remove-sauce-labs-bike-light");
        this.removeboltTshirt=page.locator("#remove-sauce-labs-bolt-t-shirt");
        this.removefleecejacket=page.locator("#remove-sauce-labs-fleece-jacket");
        this.removelabsonesie=page.locator("#remove-sauce-labs-onesie");
        this.removeredTshirt=page.locator("button[id='remove-test.allthethings()-t-shirt-(red)']");
        this.addallproducts=page.locator("button:has-text('Add to cart')");
        this.removeallproducts=page.locator("button:has-text('Remove')");
        this.twitterpage=page.locator(".social_twitter a");
        this.facebookpage=page.locator(".social_facebook a");
        this.linkedInpage=page.locator(".social_linkedin a");
        this.backpacklink=page.locator("#item_4_title_link");
        this.productlargename=page.locator(".inventory_details_name");
        this.productdesclarge=page.locator(".inventory_details_desc");
        this.productdetailprice=page.locator(".inventory_details_price");
        this.productimg=page.locator(".inventory_details_img");
        this.bikelightlink=page.locator("#item_0_title_link");
        this.boltTshirtlink=page.locator("#item_1_title_link");
        this.Addproduct=page.locator("#add-to-cart");
        this.RemoveProduct=page.locator("#remove");
        this.fleecejacketlink=page.locator("#item_5_title_link")
        this.labsonesielink=page.locator("#item_2_title_link");
        this.redTshirtlink=page.locator("#item_3_title_link")
    }
    async AddBackpackproduct()
    {
        await this.backpack.click();
    }
    async Clickoncartlink()
    {
        await this.cartlink.click();
    }
    async Cartcount()
    {
        return await this.cartcount.innerText();
    }
    async AddBikeLightProduct()
    {
        await this.bikelight.click();
    }
    async AddboltTshirtProduct()
    {
        await this.boltTshirt.click();
    }
    async AddFleeceJacketProduct()
    {
        await this.fleeceJacket.click();
    }
    async AddLabsOnesieProduct()
    {
        await this.labonesie.click();
    }
    async AddRedTshirtProduct()
    {
        await this.redTshirt.click();
        ///await expect(this.redTshirt).toBeVisible();
    }
    async RemovebackPackProduct()
    {
        await this.removebackpackk.click();
    }
    async RemoveBikeLightProduct()
    {
        await this.removebikelight.click();
    }
    async RemoveBoltTshirtproduct()
    {
        await this.removeboltTshirt.click();
    }
    async RemoveFleeceJacketProduct()
    {
        await this.removefleecejacket.click();
    }
    async RemoveLabsOnesieProduct()
    {
        await this.removelabsonesie.click();
    }
    async RemoveRedTshirtProduct()
    {
        await this.removeredTshirt.click();
    }
    async AddAllProducts()
    {
        let counts=await this.addallproducts.count();
        for(let i=0;i<counts; i++)
        {
            await this.addallproducts.nth(0).click();
        }
    }
    async RemoveAllProducts()
    {
        let counts=await this.removeallproducts.count();
        for(let i=0;i<counts;i++)
        {
            await this.removeallproducts.nth(0).click();
        }
    }
    async OpenTwitterPage()
    {
        const [TwitPage]=await Promise.all([this.page.context().waitForEvent("page"),this.twitterpage.click()])
        await TwitPage.waitForLoadState();
        return TwitPage;
    }
    async OpenFacebookPage()
    {
        const [facepage]=await Promise.all([this.page.context().waitForEvent("page"),this.facebookpage.click()]);
        await facepage.waitForLoadState();
        return facepage;
    }
    async OpenLinkedPage()
    {
        const [linkedpage]=await Promise.all([this.page.context().waitForEvent("page"),this.linkedInpage.click()]);
        await linkedpage.waitForLoadState();
        return linkedpage;
    }
    async ClickonBackPacklink()
    {
        await this.backpacklink.click();
    }
    async ClickonBikeLightlink()
    {
        await this.bikelightlink.click();
    }
    async ClickonBoltTshirtlink()
    {
        await this.boltTshirtlink.click();

    }
    async clickonAddProductonDetailPage()
    {
        await this.Addproduct.click();
    }
    async clickonRemoveProductonDetailPage()
    {
        await this.RemoveProduct.click();
    }
    async ClickonFleeceJacketlink()
    {
        await this.fleecejacketlink.click();
    }
    async ClickonLabsOnesielink()
    {
        await this.labsonesielink.click();
    }
    async ClickonRedTshirtlink()
    {
        await this.redTshirtlink.click();
    }
    

}