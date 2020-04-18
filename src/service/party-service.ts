import {Service} from "./service";

export class PartyService extends Service{
    getAll() {
        return this.get("/Party");
    }

    create(party) {
        return; // TODO: @Tavo
    }
}
