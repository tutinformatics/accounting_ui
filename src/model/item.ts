import {Model} from "./model";

export class Item extends Model{
    lastUpdatedStamp: Date = new Date();
    amount: number;
    createdTxStamp: Date = new Date();
    createdStamp: Date = new Date();
    taxableFlag: string = 'Y';
    description: string;
    lastUpdatedTxStamp: Date = new Date();
    invoiceItemSeqId: string;
    uomId: string;
    invoiceItemTypeId: string;
    invoiceId: string;

    toJson() {
        return {
            lastUpdatedStamp: this.lastUpdatedStamp.getTime(),
            amount: this.amount,
            createdTxStamp: this.createdTxStamp.getTime(),
            createdStamp: this.createdStamp.getTime(),
            taxableFlag: this.taxableFlag,
            description: this.description,
            lastUpdatedTxStamp: this.lastUpdatedTxStamp.getTime(),
            invoiceItemSeqId: this.invoiceItemSeqId,
            uomId: this.uomId,
            invoiceItemTypeId: this.invoiceItemTypeId,
            invoiceId: this.invoiceId,
            _ENTITY_NAME_: 'InvoiceItem'
        }
    }
}
