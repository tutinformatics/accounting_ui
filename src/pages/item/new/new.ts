import {PartyService} from "../../../service/party-service";
import {inject} from "aurelia-dependency-injection";
import {ValidationRules, ValidationControllerFactory, ValidationController} from "aurelia-validation";
import {Party} from "../../../model/party";

@inject(PartyService, ValidationControllerFactory, ValidationController)
export class New {

    // TODO Tavo - Wrong model
    // party: Party = new Party();
    controller = null;

    // TODO Tavo - attach those fields to correct model
    id: number;
    name: String = "";
    price: number;


    constructor(private partyService: PartyService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
        this.initRules()
    }

    initRules() {
        // TODO Marten/Kapa - after fields are attached to model
        //ValidationRules
        //    .ensure("partyId")
        //    .required()
        //    .on(this.party)
    }

    save() {
        if (this.isValidated()) {
            // TODO Tavo - attach fields to correct models and call correct function from service
            //this.partyService.create(this.party).then(res => {
            //    console.log(res)
            //});
            //this.party = new Party();
        }
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }
}
