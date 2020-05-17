import {Model} from "./model";

export class OrderItemType extends Model {
    lastUpdatedStamp: Date;
    parentTypeId: string;
    hasTable: boolean;
    createdTxStamp: Date;
    createdStamp: Date;
    description: string;
    lastUpdatedTxStamp: Date;
    orderItemTypeId: string;
    _ENTITY_NAME_ = 'OrderItemType'
    /*
    description: string;
    internalName: string;
    priceDetailText: number;
    orderContentTypeId: string = "ASSET_USAGE"; // TODO: dynamic
    _ENTITY_NAME_ = 'OrderContent';

    contentId: string = "contId";
    fromDate: Date = new Date();*/
}
