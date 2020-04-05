import {Item} from "./item";

export class Invoice {
    invoiceId: string;
    partyId: string;
    dueDate: Date;
    invoiceTypeId: string;
    createdStamp: Date;
    description: string;
    partyIdFrom: string;
    lastUpdatedStamp: Date;
    currencyUomId: string;
    statusId: string;
    items: [Item]; // TODO: some mapping, not sure of field name?
}
