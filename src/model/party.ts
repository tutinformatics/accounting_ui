import {Model} from "./model";

export class Party extends Model{
    partyId: string;
    statusId: string = "PARTY_ENABLED";
    createdStamp: Date = new Date();
    partyTypeId: string;
    createdTxStamp: Date = new Date();
    lastUpdatedTxStamp: Date = new Date();
    lastUpdatedStamp: Date = new Date();
    _ENTITY_NAME_ = 'Party'
}
