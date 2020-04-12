import {Model} from "./model";

export class Party extends Model{
    partyId: string;
    statusId: string;
    createdStamp: Date = new Date();
    partyTypeId: string;
    createdTxStamp: Date = new Date();
    lastUpdatedTxStamp: Date = new Date();
    lastUpdatedStamp: Date = new Date();

    toJson() {
        return {
            partyId: this.partyId,
            statusId: this.statusId,
            createdStamp: this.createdStamp.getTime(),
            partyTypeId: this.partyTypeId,
            createdTxStamp: this.createdTxStamp.getTime(),
            lastUpdatedTxStamp: this.lastUpdatedTxStamp.getTime(),
            lastUpdatedStamp: this.lastUpdatedStamp.getTime(),
            _ENTITY_NAME_: 'Party',
        }
    }
}
