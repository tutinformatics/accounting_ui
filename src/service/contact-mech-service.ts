import {Service} from "./service";
import {ContactMech} from "../model/contact-mech";

export class ContactMechService extends Service {
    getAll() {
        return this.get("/entities/ContactMech");
    }

    create(contactMech: ContactMech) {
        return this.post('/entities/ContactMech', contactMech.toJson())
    }
}
