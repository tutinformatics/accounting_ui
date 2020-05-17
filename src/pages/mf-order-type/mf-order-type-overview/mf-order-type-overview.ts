import {inject} from "aurelia-dependency-injection";
import {OrderItemType} from "../../../model/orderItemType";
import {OrderTypeService} from "../../../service/order-type-service";

@inject(OrderTypeService)
export class Items {

    orderItemTypes: [OrderItemType];

    constructor(private orderTypeService: OrderTypeService) {
        this.loadData()
    }

    private loadData() {
        this.orderTypeService.getAll()
            .then(res => this.orderItemTypes = res)
    }

    goToOrderTypeView(orderItemTypeId: String, description: String) {
        sessionStorage.setItem("orderTypeId", orderItemTypeId.toString());

        if (description == null) {
            sessionStorage.setItem("description", "");
        } else {
            sessionStorage.setItem("description", description.toString());
        }

        window.location.href = "/mf-order-type/mf-order-type-view"
    }
}
