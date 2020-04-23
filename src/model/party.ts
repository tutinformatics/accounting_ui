import {Model} from "./model";
import {PartyAndPerson} from "./party-and-person";
import {PartyAndContactMech} from "./party-and-contact-mech";

export class Party extends Model{
    partyId: string;
    lastModifiedByUserLogin: string
    statusId: string = "PARTY_ENABLED";
    createdStamp: Date = new Date();
    partyTypeId: string;
    createdTxStamp: Date = new Date();
    lastUpdatedTxStamp: Date = new Date();
    lastUpdatedStamp: Date = new Date();
    _ENTITY_NAME_ = 'Party'
    __partyAndPerson: PartyAndPerson = new PartyAndPerson();
    __partyAndContactMech: PartyAndContactMech = new PartyAndContactMech();
}
