import {PartyService} from "../../../service/party-service";
import {inject} from "aurelia-dependency-injection";

@inject(PartyService)
export class Customers {
    parties = [];

    constructor(private partyService: PartyService) {
        this.initParties();
    }

    initParties() {
        this.partyService.getAll()
            .then(res => this.parties = res);
    }
}