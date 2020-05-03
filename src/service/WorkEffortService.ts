import {Service} from "./service";
import {WorkEffort} from "../model/workeffort";

export class WorkEffortService extends Service {

    getAll() {
        return this.get("/entities/WorkEffort");
    }

    createWorkEffort(workEffort: WorkEffort) {
        console.log(workEffort.toJson())
        return this.post("/entities/WorkEffort", workEffort.toJson());
    }

}