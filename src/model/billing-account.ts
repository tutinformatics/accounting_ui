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

    toJson() {
        return {
            lastUpdatedStamp: 1586677798898,
            createdTxStamp: 1585748175239,
            createdStamp: 1585748180543,
            _ENTITY_NAME_: "BillingAccount",
            description: "Demo Customer Company Billing Account",
            lastUpdatedTxStamp: 1586677797612,
            billingAccountId: "9010",
            contactMechId: "9010",
            thruDate: null,
            fromDate: 989704800000,
            accountLimit: 10000.00,
            externalAccountId: null,
            accountCurrencyUomId: "USD",
        }
    }
}
