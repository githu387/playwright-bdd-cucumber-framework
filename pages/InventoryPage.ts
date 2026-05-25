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

}