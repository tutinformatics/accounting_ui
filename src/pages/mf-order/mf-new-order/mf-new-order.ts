
export class New {
    message: string;

    constructor() {
        this.message = 'Hello world';
    }

    saveAndGoBackToActiveOrders() {
        this.save()
        window.location.href = "/order/mf-active-orders"
    }

    save() {
        /*
        if (this.isValidated()) {
            this.workEffortService.createWorkEffort(this.workEffort)
                .then(() => this.workEffort = new WorkEffort())
        }*/
    }

    isValidated() {
        /*
        if (this.controller.errors.length > 0) {
            return false
        }
        return true*/
    }


}
