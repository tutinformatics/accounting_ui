import {Order} from "../../../model/order";
import {inject} from "aurelia-dependency-injection";
import {OrderService} from "../../../service/order-service";

@inject(OrderService)
export class MfActiveOrders {

    orders: [Order]

    constructor(private orderService: OrderService) {
        this.loadData()
    }

    private loadData() {
        this.orderService.getAll()
            .then(res => this.orders = res)
    }

    goToOrderView(orderId: String, unitPrice: String, createdStamp: String, estimatedDeliveryDate: String, orderItemSeqId: String) {
        sessionStorage.setItem("orderId", orderId.toString());
        sessionStorage.setItem("orderItemSeqId", orderItemSeqId.toString());
        if (createdStamp == null) {
            sessionStorage.setItem("createdStamp", "")
        } else {
            sessionStorage.setItem("createdStamp", createdStamp.toString())
            console.log(createdStamp.toString())
        }

        if (estimatedDeliveryDate == null) {
            sessionStorage.setItem("estimatedDeliveryDate", "")
        } else {
            sessionStorage.setItem("estimatedDeliveryDate", estimatedDeliveryDate.toString())
        }
        if (unitPrice == null) {
            sessionStorage.setItem("unitPrice", "");
        } else {
            sessionStorage.setItem("unitPrice", unitPrice.toString());
        }

        window.location.href = "/mf-order/mf-order-view"
    }

    formatTime(timeStamp: String) {
        if (timeStamp == null) return ""
        let date = new Date(parseInt(timeStamp.toString()));
        return date.toDateString()
    }

    calculateProgress(order: Order) {
        if (order.estimatedDeliveryDate == null || order.createdStamp == null) return "";
        let totalDays = new Date(parseInt(order.estimatedDeliveryDate.toString())).getTime() - new Date(parseInt(order.createdStamp.toString())).getTime();
        let daysDone = new Date(Date.now()).getTime() - new Date(parseInt(order.createdStamp.toString())).getTime();
        if (daysDone >= totalDays) return "100%";
        return Math.round((daysDone / totalDays)*100) + "%"
    }
}
