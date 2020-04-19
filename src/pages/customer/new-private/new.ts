import {PartyService} from "../../../service/party-service";
import {inject} from "aurelia-dependency-injection";
import {ValidationRules, ValidationControllerFactory, ValidationController} from "aurelia-validation";
import {Party} from "../../../model/party";

@inject(PartyService, ValidationControllerFactory, ValidationController)
export class New {

    party: Party = new Party();
    controller = null;

    // TODO Tavo - attach thosefields to correct model
    id: number;
    name: String = "";
    firstName: String = "";
    lastName: String = "";
    email: String = "";
    phone: number;
    age: number;
    gender: string;
    address: String = "";
    city: String = "";
    country: String = "";
    postalCode: number;
    type: String = "private";


    constructor(private partyService: PartyService, validationControllerFactory) {
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
            // TODO Tavo - call correct service function
            //this.partyService.create(this.party).then(res => {
            //    console.log(res)
            //});
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
