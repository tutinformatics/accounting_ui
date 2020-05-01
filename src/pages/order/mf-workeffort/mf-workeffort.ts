import {inject} from 'aurelia-framework';
import {WorkEffortService} from "../../../service/WorkEffortService";
import {TimeUtils} from '../../../util/time-utils';

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
}
