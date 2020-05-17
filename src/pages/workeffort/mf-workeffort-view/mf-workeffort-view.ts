import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {WorkEffort} from "../../../model/workeffort";
import {WorkEffortService} from "../../../service/WorkEffortService";

@inject(WorkEffortService, ValidationControllerFactory, ValidationController)
export class MfWorkeffortView {


    workEffort = new WorkEffort();
    controller = null;

    constructor(private workEffortService: WorkEffortService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();

        this.workEffort.workEffortId = sessionStorage.getItem("workEffortId")
        this.workEffort.workEffortTypeId = sessionStorage.getItem("workEffortTypeId")
        this.workEffort.createdTxStamp = parseInt(sessionStorage.getItem("createdTxStamp"))
        this.workEffort.priority = parseInt(sessionStorage.getItem("priority"))
        this.workEffort.workEffortName = sessionStorage.getItem("workEffortName")
        this.workEffort.description = sessionStorage.getItem("description")
        this.workEffort.percentComplete = parseInt(sessionStorage.getItem("percentComplete"))
    }

    saveChanges() {
        this.workEffortService.update(this.workEffort)
            .then(() => this.workEffort = new WorkEffort())

    }

    saveChangesAndGoToWorkefforts() {
        this.saveChanges()
        window.location.href = "/workeffort/mf-workeffort"
    }

    deleteWorkEffort() {
        console.log(this.workEffortService.deleteWorkEffort(this.workEffort))
        window.location.href = "/workeffort/mf-workeffort"
    }

}
