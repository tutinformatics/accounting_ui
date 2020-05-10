import {Model} from "./model";

export class Order extends Model {
    orderId: string;
    createdStamp: Date;// = new Date();
    deploymentId: string;
    cancelBackOrderDate: Date;
    itemDescription: string;
    selectedAmount: number;
    orderItemSeqId: string;
    unitPrice: number;
    productId: string;
    unitRecurringPrice: number;
    createdTxStamp: Date;// = new Date();
    isItemGroupPrimary: boolean;
    autoCancelDate: Date;
    productFeatureId: string;
    overrideGlAccountId: string;
    lastUpdatedTxStamp: Date;// = new Date();
    budgetId: string;
    supplierProductId: string;
    estimatedDeliveryDate: Date;
    quoteId: string;
    statusId: string;
    syncStatusId: string;
    estimatedShipDate: Date;
    shoppingListItemSeqId: string;
    subscriptionId: string;
    salesOpportunityId: string;
    dontCancelSetUserLogin: number;
    isPromo: boolean;
    isModifiedPrice: boolean;
    reserveAfterDate: Date;
    shipBeforeDate: Date;
    productCategoryId: string;
    shoppingListId: string;
    unitListPrice: number;
    unitAverageCost: number;
    orderItemTypeId: string;
    lastUpdatedStamp: Date = new Date();
    dontCancelSetDate: Date;
    quantity: number;
    comments: string;
    recurringFreqUomId: string;
    orderItemGroupSeqId: string;
    quoteItemSeqId: string;
    externalId: string;
    fromInventoryItemId: string;
    budgetItemSeqId: string;
    correspondingPoId: string;
    cancelQuantity: number;
    shipAfterDate: Date;
    changeByUserLoginId: number;
    prodCatalogId: string;
    //ORDER_ITEM: string;
    _ENTITY_NAME_ = 'OrderItem'
    /*
    description: string;
    internalName: string;
    priceDetailText: number;
    orderContentTypeId: string = "ASSET_USAGE"; // TODO: dynamic
    _ENTITY_NAME_ = 'OrderContent';

    contentId: string = "contId";
    fromDate: Date = new Date();*/
}
