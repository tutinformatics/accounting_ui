import {PartyService} from "../../../service/party-service";
import {inject} from "aurelia-dependency-injection";
import {ValidationRules, ValidationControllerFactory, ValidationController} from "aurelia-validation";
import {Party} from "../../../model/party";
import {PartyAndPerson} from "../../../model/party-and-person";
import {PartyAndContactMech} from "../../../model/party-and-contact-mech";
import {ContactMechService} from "../../../service/contact-mech-service";
import {ContactMech} from "../../../model/contact-mech";

@inject(PartyService, ContactMechService, ValidationControllerFactory, ValidationController)
export class New {

    party: Party = new Party();
    partyAndPerson = new PartyAndPerson();
    partyAndContactMech = new PartyAndContactMech();
    controller = null;


    constructor(private partyService: PartyService,
                private contactMechService: ContactMechService,
                validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
        this.initRules()
    }

    initRules() {
        // TODO Marten/Kapa - add more validation rules when all fields are attached to model

        ValidationRules
            .ensure("partyId")
            .required()
            .on(this.party)
    }

    save() {
        if (this.isValidated()) {
            this.party.partyTypeId =  "PERSON";
            this.partyAndPerson.partyTypeId = "PERSON";
            this.partyService.create(this.party).then(res => {
               this.partyAndPerson.partyId = res.partyId;
               this.partyAndContactMech.partyId = res.partyId;
               this.partyService.createPartyAndPerson(this.partyAndPerson)
                   .then(() => {
                       const contactMech = new ContactMech();
                       contactMech.infoString = this.partyAndContactMech.infoString;
                       this.contactMechService.create(contactMech).then(c => {
                           this.partyAndContactMech.contactMechId = c.contactMechId;
                           this.partyService.createPartyAndContactMech(this.partyAndContactMech)
                               .then(res => console.log(res));
                       });
                   })
            });
        }
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }
}
