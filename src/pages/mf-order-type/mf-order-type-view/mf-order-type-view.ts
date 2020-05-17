import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {OrderTypeService} from "../../../service/order-type-service";
import {OrderItemType} from "../../../model/orderItemType";

@inject(OrderTypeService, ValidationControllerFactory, ValidationController)
export class MfOrderView {
    orderTypeId: String;
    description: String;

    orderType = new OrderItemType();
    controller = null;

    constructor(private orderTypeService: OrderTypeService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();

        this.orderTypeId = sessionStorage.getItem("orderTypeId");

        if (sessionStorage.getItem("description") != "") {
            this.description = sessionStorage.getItem("description").toString();
        }
    }

    saveChanges() {

        this.orderType.orderItemTypeId = this.orderTypeId.toString();
        this.orderType.description = this.description.toString();

        this.orderTypeService.update(this.orderType)
            .then(() => this.orderType = new OrderItemType())
    }

    saveChangesAndGoToOrderTypeOverview() {
        this.saveChanges()
        window.location.href = "/mf-order-type/mf-order-type-overview"
    }

    deleteOrder() {
        this.orderType.orderItemTypeId = this.orderTypeId.toString();
        this.orderType.description = this.description.toString();
        this.orderTypeService.deleteOrderType(this.orderType);
    }

}
