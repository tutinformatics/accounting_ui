import {Model} from "./model";

export class Product extends Model{
    productId: string;
    createdStamp: Date = new Date();
    productName: string;
    createdTxStamp: Date = new Date();
    lastUpdatedTxStamp: Date = new Date();
    description: string;
    internalName: string;
    lastUpdatedStamp: Date = new Date();
    price: number;
    productTypeId: string = "ASSET_USAGE" // TODO: dynamic

    toJson() {
        return {
            productId: this.productId,
            createdStamp: this.createdStamp.getTime(),
            productName: this.productName,
            createdTxStamp: this.createdTxStamp.getTime(),
            lastUpdatedTxStamp: this.lastUpdatedTxStamp.getTime(),
            description: this.description,
            internalName: this.internalName,
            lastUpdatedStamp: this.lastUpdatedStamp.getTime(),
            productTypeId: this.productTypeId,
            price: this.price,
        _ENTITY_NAME_: 'Product',
        }
    }
}
