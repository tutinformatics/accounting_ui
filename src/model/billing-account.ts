import {Model} from "./model";

export class BillingAccount extends Model {

    lastUpdatedStamp: Date = new Date();
    createdTxStamp: Date = new Date();
    createdStamp: Date = new Date();
    description: string;
    lastUpdatedTxStamp: Date = new Date();
    billingAccountId: string
    contactMechId: string
    thruDate: Date = new Date();
    fromDate: Date = new Date();
    accountLimit: number
    externalAccountId: string
    accountCurrencyUomId: "USD"
    _ENTITY_NAME_ = "BillingAccount"
}
