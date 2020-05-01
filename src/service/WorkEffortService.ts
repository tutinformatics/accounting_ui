import {Service} from "./service";
import {WorkEffort} from "../model/workeffort";

export class WorkEffortService extends Service {

    getAll() {
        return this.get("/entities/WorkEffort");
    }

    createWorkEffort(workEffort: WorkEffort) {
        // return this.post("/services/createInvoice", invoice.toJson());
        console.log(workEffort.toJson())
        return this.post("/entities/Invoice", workEffort.toJson());
    }

}