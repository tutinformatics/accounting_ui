import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order-service";

@inject(OrderService, ValidationControllerFactory, ValidationController)
export class MfNewOrder {

    order = new Order();
    controller = null;

    constructor(private orderService: OrderService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
        this.initRules()
    }

    initRules() {
    }

    save() {
        if (this.isValidated()) {
            this.orderService.create(this.order)
                .then(() => this.order = new Order())
        }
    }

    saveAndGoBackToActiveOrders() {
        console.log("Save")
        window.console.log("Save")
        this.save()
        window.location.href = "/mf-order/mf-active-orders"
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }
}
