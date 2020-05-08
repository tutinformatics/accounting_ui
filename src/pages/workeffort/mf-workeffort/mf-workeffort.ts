import {inject} from 'aurelia-framework';
import {WorkEffortService} from "../../../service/WorkEffortService";
import {TimeUtils} from '../../../util/time-utils';
import {WorkEffort} from "../../../model/workeffort";

@inject(WorkEffortService)
export class Overview {

    workEfforts = [];
    sortAsc = true;

    constructor(private workEffortService: WorkEffortService) {
        this.getWorkEfforts();
    }

    public sortBy(prop) {
        this.workEfforts = this.workEfforts.sort((a, b) => {
            if (a[prop] > b[prop]) return this.sortAsc ? 1 : -1;
            if (a[prop] < b[prop]) return this.sortAsc ? -1 : 1;
            return 0;
        })
    }

    public getWorkEfforts() {
        this.workEffortService.getAll()
            .then(res => this.workEfforts = res);
    }

    public convertTime(ms: number) {
        return TimeUtils.convertDate(ms);
    }

    public getTotal(workEffort): number {
        let amount = 0;
        for (let i = 0; i < workEffort.invoiceItemIdValues.length; i++) {
            amount += workEffort.invoiceItemIdValues[i].amount;
        }
        return amount;
    }

    public goToWorkEffortView(workEffort: WorkEffort) {
        sessionStorage.setItem("workEffortId", workEffort.workEffortId);

        if (workEffort.workEffortTypeId == null) {sessionStorage.setItem("workEffortTypeId", "");
        } else {sessionStorage.setItem("workEffortTypeId", workEffort.workEffortTypeId);
        }

        sessionStorage.setItem("createdTxStamp", String(workEffort.createdTxStamp));

        if (workEffort.priority == null) {sessionStorage.setItem("priority", "");
        } else {sessionStorage.setItem("priority", String(workEffort.priority));
        }

        if (workEffort.workEffortName == null) {sessionStorage.setItem("workEffortName", "");
        } else { sessionStorage.setItem("workEffortName", workEffort.workEffortName);
        }

        if (workEffort.description == null) {sessionStorage.setItem("description", "");
        } else {sessionStorage.setItem("description", workEffort.description);
        }

        if (workEffort.percentComplete == null) {sessionStorage.setItem("percentComplete", "");
        } else {sessionStorage.setItem("percentComplete", String(workEffort.percentComplete));
        }

        window.location.href = "/workeffort/mf-workeffort-view"
    }
}
