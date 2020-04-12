import {Service} from "./service";
import {Model} from "../model/model";

export class PartyService extends Service{
    getAll() {
        return this.get("/entities/Party");
    }

    create(party: Model) {
        return this.post('/entities/Party', party.toJson())
    }
}
