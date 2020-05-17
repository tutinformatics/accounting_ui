import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {OrderTypeService} from "../../../service/order-type-service";
import {OrderItemType} from "../../../model/orderItemType";

@inject(OrderTypeService, ValidationControllerFactory, ValidationController)
export class New {

    orderType = new OrderItemType();
    controller = null;

    constructor(private orderTypeService: OrderTypeService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
    }

    save() {
        if (this.isValidated()) {
            this.orderTypeService.create(this.orderType)
                .then(() => this.orderType = new OrderItemType())
        }
    }

    saveAndGoToOrderTypeOverview() {
        this.save();
        window.location.href = "/mf-order-type/mf-order-type-overview"
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }
}
