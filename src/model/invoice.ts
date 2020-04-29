import {InvoiceItem} from "./invoice-item";
import {Model} from "./model";

export class Invoice extends Model{
    invoiceId: string = new Date().getTime().toString();
    partyIdFrom: string;
    partyId: string = 'Company';
    dueDate: Date = new Date();
    invoiceTypeId: string;
    createdStamp: Date = new Date();
    referenceNumber: string;
    description: string;
    lastUpdatedStamp: Date = new Date();
    currencyUomId: string = 'USD';
    createdTxStamp: Date = new Date();
    lastUpdatedTxStamp: Date = new Date();
    invoiceDate: Date = new Date();
    statusId: string;
    _ENTITY_NAME_ = 'Invoice';
}
