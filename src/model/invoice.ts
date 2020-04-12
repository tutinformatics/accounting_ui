import {Item} from "./item";
import {Model} from "./model";

export class Invoice extends Model{
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
    items: [Item];

    toJson() {
        return {
            invoiceTypeId: 'PURCHASE_INVOICE',
            partyIdFrom: 'DEMO_COMPANY1',
            partyId: 'DEMO_COMPANY',
            invoiceDate: new Date().getTime(),
            _ENTITY_NAME_: 'Invoice'
            //userLogin: userLogin
        }

        //return {"partyIdFrom":"Company","lastUpdatedStamp":1585748174696,"roleTypeId":null,"recurrenceInfoId":null,"createdTxStamp":1585748173832,"invoiceTypeId":"SALES_INVOICE","dueDate":1148550387122,"createdStamp":1585748174696,"_ENTITY_NAME_":"Invoice","description":"This is the first invoice number to AcctBuyer","lastUpdatedTxStamp":1585748173832,"billingAccountId":null,"invoiceDate":1145958387122,"contactMechId":null,"currencyUomId":"USD","statusId":"INVOICE_IN_PROCESS","paidDate":null,"referenceNumber":null,"invoiceId":"demo10000","invoiceMessage":null,"_DELEGATOR_NAME_":"default","partyId":"AcctBuyer"}
    }
}
