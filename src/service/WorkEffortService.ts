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

    update(workEffort: WorkEffort) {
        return this.put('/entities/WorkEffort', workEffort.toJson())
    }

    deleteWorkEffort(workEffort: WorkEffort) {
        //return this.delete('/entities/WorkEffort', workEffort.toJson())
        //TODO @Liis, create your own
    }

}
