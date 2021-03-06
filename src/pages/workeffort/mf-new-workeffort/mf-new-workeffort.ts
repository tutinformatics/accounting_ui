import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {WorkEffort} from "../../../model/workeffort";
import {WorkEffortService} from "../../../service/WorkEffortService";

@inject(WorkEffortService, ValidationControllerFactory, ValidationController)
export class New {

    workEffort = new WorkEffort();
    controller = null;

    constructor(private workEffortService: WorkEffortService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
    }


    save() {
        if (this.isValidated()) {
            this.workEffortService.createWorkEffort(this.workEffort)
                .then(() => this.workEffort = new WorkEffort())
        }
    }

    saveAndGoBackToWorkefforts() {
        this.save()
        window.location.href = "/workeffort/mf-workeffort"
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }
}