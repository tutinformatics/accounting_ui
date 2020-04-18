import {Item} from "./item";
import {Model} from "./model";

export class Invoice extends Model{
    invoiceId: string;
    partyIdFrom: string;
    partyId: string;
    dueDate: Date = new Date();
    invoiceTypeId: string;
    createdStamp: Date = new Date();
    description: string;
    lastUpdatedStamp: Date = new Date();
    currencyUomId: string = 'USD';
    createdTxStamp: Date = new Date();
    lastUpdatedTxStamp: Date = new Date();
    invoiceDate: Date = new Date();
    statusId: string;
    items: [Item]; // TODO: Something with these

    toJson() {
        return {
            // Mandatory fields
            invoiceId: this.invoiceId,
            invoiceTypeId: this.invoiceTypeId,
            partyIdFrom: this.partyIdFrom, // Other guys
            partyId: this.partyId, // Us

            // Optional fields
            dueDate: this.dueDate.getTime(),
            invoiceDate: this.invoiceDate.getTime(),
            createdStamp: this.createdStamp.getTime(),
            description: this.description,
            lastUpdatedStamp: this.lastUpdatedStamp.getTime(),
            currencyUomId: this.currencyUomId,
            createdTxStamp: this.createdTxStamp.getTime(),
            lastUpdatedTxStamp: this.lastUpdatedTxStamp.getTime(),
            statusId: this.statusId,
            _ENTITY_NAME_: 'Invoice',
        }
    }
}
