import {Model} from "./model";

export class InvoiceItem extends Model{
    lastUpdatedStamp: Date = new Date();
    amount: number;
    createdTxStamp: Date = new Date();
    createdStamp: Date = new Date();
    taxableFlag: string = 'Y';
    description: string;
    lastUpdatedTxStamp: Date = new Date();
    invoiceItemSeqId: string;
    uomId: string;
    invoiceItemTypeId: string = 'PINV_WE_ITEM'; // TODO: Add types?
    invoiceId: string;
    _ENTITY_NAME_= 'InvoiceItem';
}
