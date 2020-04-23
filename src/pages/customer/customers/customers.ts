import {PartyService} from "../../../service/party-service";
import {inject} from "aurelia-dependency-injection";
import {TimeUtils} from "../../../util/time-utils";
import {Party} from "../../../model/party";

@inject(PartyService)
export class Customers {
    parties: [Party]

    constructor(private partyService: PartyService) {
        this.initParties();
    }

    initParties() {
        this.partyService.getAllPersons()
            .then(res => {
                res.map(p => {
                    delete Object.assign(p, {['__partyAndPerson']: p['_toOne_Person'] })['_toOne_Person'];
                    this.partyService.getPartyAndContactMechForParty(p.partyId)
                        .then(resp => p.__partyAndContactMech = resp[0])
                });
                this.parties = res;
            })
            .then(() => console.log(this.parties));
    }

    convertTime(ms: number) {
        return TimeUtils.convertDate(ms);
    }

}
