import {Service} from "./service";

export class PartyService extends Service{
    getAll() {
        return this.http.fetch("Party")
            .then(response => response.json());
    }

    create(party) {
        return; // TODO
    }
}
