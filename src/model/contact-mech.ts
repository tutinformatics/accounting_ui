import {Model} from "./model";

export class ContactMech extends Model {

    lastUpdatedStamp = new Date();
    infoString: string
    createdTxStamp = new Date();
    createdStamp = new Date();
    _ENTITY_NAME_ = "ContactMech";
    lastUpdatedTxStamp = new Date();
    contactMechTypeId = "EMAIL_ADDRESS"
    contactMechId: string
}
