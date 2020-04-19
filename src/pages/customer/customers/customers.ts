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
            .then(res => this.parties = res)
            .then(() => {
                // @ts-ignore
                for (let party of this.parties) {
                    this.partyService.getPartyAndPersonForParty(party.partyId)
                        .then(res => party.__partyAndPerson = res[0]);
                    this.partyService.getPartyAndContactMechForParty(party.partyId)
                        .then(res => party.__partyAndContactMech = res[0])
                        .then(() => console.log(party));
                }
            });
    }

    convertTime(ms: number) {
        return TimeUtils.convertDate(ms);
    }

}
