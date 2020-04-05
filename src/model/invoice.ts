import {Item} from "./item";

export class Invoice {
    invoiceId: string;
    partyIdFrom: string;
    partyId: string;
    dueDate: Date;
    invoiceTypeId: string;
    createdStamp: Date;
    description: string;
    lastUpdatedStamp: Date;
    currencyUomId: string;
    createdTxStamp: Date;
    lastUpdatedTxStamp: Date;
    invoiceDate: Date;
    statusId: string;
    items: [Item]; // TODO: some mapping, not sure of field name?
}
