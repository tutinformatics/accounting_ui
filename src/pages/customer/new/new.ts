import {PartyService} from "../../../service/party-service";
import {inject} from "aurelia-dependency-injection";
import {ValidationRules, ValidationControllerFactory, ValidationController} from "aurelia-validation";
import {Party} from "../../../model/party";

@inject(PartyService, ValidationControllerFactory, ValidationController)
export class New {

    party: Party = new Party();
    controller = null;


    constructor(private partyService: PartyService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
        this.initRules()
    }

    initRules() {
        ValidationRules
            .ensure("partyId")
            .required()
            .on(this.party)
    }

    save() {
        if (this.isValidated()) {
            this.partyService.create(this.party).then(res => {
                console.log(res)
            });
            this.party = new Party();
        }
    }

    isValidated() {
        if (this.controller.errors.length > 0 || this.party.partyId == undefined) {
            return false
        }
        return true
    }
}
