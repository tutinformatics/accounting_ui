import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order-service";

@inject(OrderService, ValidationControllerFactory, ValidationController)
export class MfOrderView {
    orderId: String;
    orderItemSeqId: String;
    unitPrice: String;
    createdStamp: Date;
    estimatedDeliveryDate: Date;

    order = new Order();
    controller = null;

    constructor(private orderService: OrderService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();

        this.orderId = sessionStorage.getItem("orderId"); // !

        this.orderItemSeqId = sessionStorage.getItem("orderItemSeqId");

        this.unitPrice = sessionStorage.getItem("unitPrice"); // !

        if (sessionStorage.getItem("createdStamp") != "") {
            this.createdStamp = new Date(parseInt(sessionStorage.getItem("createdStamp").toString()));
        }
        if (sessionStorage.getItem("estimatedDeliveryDate") != "") {
            this.estimatedDeliveryDate = new Date(parseInt(sessionStorage.getItem("estimatedDeliveryDate").toString()));
        }
        console.log(sessionStorage.getItem("estimatedDeliveryDate"))
    }

    saveChanges() {

        this.order.orderId = this.orderId.toString();
        this.order.orderItemSeqId = this.orderItemSeqId.toString();
        this.order.unitPrice = parseInt(this.unitPrice.toString(), 10)
        console.log(this.order.orderId)
        console.log(this.order.orderItemSeqId)
        this.order.createdStamp = this.createdStamp;
        this.order.estimatedDeliveryDate = this.estimatedDeliveryDate;

        this.orderService.update(this.order)
            .then(() => this.order = new Order())
    }

    saveChangesAndGoToActiveOrders() {
        this.saveChanges()
        window.location.href = "/mf-order/mf-active-orders"
    }

    deleteOrder() {
        console.log("DeLETE ID FFS")
        this.order.orderId = this.orderId.toString();
        this.order.unitPrice = parseInt(this.unitPrice.toString(), 10);
        this.order.createdStamp = this.createdStamp;
        this.order.orderItemSeqId = this.orderItemSeqId.toString();
        this.order.estimatedDeliveryDate = this.estimatedDeliveryDate;
        this.orderService.deleteOrder(this.order);

        //window.location.href = "/mf-order/mf-active-orders"

    }

}
