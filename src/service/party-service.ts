import {Service} from "./service";
import {Party} from "../model/party";

export class PartyService extends Service {
    getAll() {
        return this.get("/entities/Party");
    }

    create(party: Party) {
        return this.post('/entities/Party', party.toJson())
    }
}
