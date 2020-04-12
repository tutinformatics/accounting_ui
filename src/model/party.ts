import {Model} from "./model";

export class Party extends Model{
    partyId: string;
    statusId: string;
    createdStamp: Date;
    partyTypeId: string;
    createdTxStamp: Date;
    lastUpdatedTxStamp: Date;
    lastUpdatedStamp: Date;

    toJson() {

    }
}
