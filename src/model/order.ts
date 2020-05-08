import {Model} from "./model";

export class Order extends Model {
    orderId: string;
    createdStamp: Date = new Date();
    createdTxStamp: Date = new Date();
    lastUpdatedTxStamp: Date = new Date();
    description: string;
    internalName: string;
    lastUpdatedStamp: Date = new Date();
    priceDetailText: number;
    productTypeId: string = "ASSET_USAGE" // TODO: dynamic
    _ENTITY_NAME_ = 'Order'
}
