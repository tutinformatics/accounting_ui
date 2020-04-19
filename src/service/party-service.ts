import {Service} from "./service";
import {Party} from "../model/party";
import {PartyAndPerson} from "../model/party-and-person";
import {PartyAndContactMech} from "../model/party-and-contact-mech";

export class PartyService extends Service {
    getAll() {
        return this.get("/entities/Party");
    }

    getAllPersons() {
        return this.get("/entities/Party", { partyTypeId: 'PERSON' });
    }

    getPartyAndPersonForParty(partyId: string) {
        return this.get("/entities/PartyAndPerson", { partyId: partyId })
    }

    getPartyAndContactMechForParty(partyId: string) {
        return this.get("/entities/PartyAndContactMech", { partyId: partyId })
    }

    create(party: Party) {
        return this.post('/entities/Party', party.toJson())
    }

    createPartyAndPerson(partyAndPerson: PartyAndPerson) {
        return this.post('/entities/PartyAndPerson', partyAndPerson.toJson())
    }

    createPartyAndContactMech(partyAndContactMech: PartyAndContactMech) {
        return this.post('/entities/PartyAndContactMech', partyAndContactMech.toJson())
    }

}
