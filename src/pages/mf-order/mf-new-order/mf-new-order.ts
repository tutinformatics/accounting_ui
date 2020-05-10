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
        console.log(this.order.createdStamp)
        console.log(Date.parse(this.order.createdStamp.toString()))
        //this.order.createdStamp = Date.parse(this.order.createdStamp.toString())
        //console.log(this.order.estimatedDeliveryDate)
        //this.order.estimatedDeliveryDate = Date.parse(this.order.estimatedDeliveryDate.toString())
        //this.order.createdStamp = this.formatTime(this.order.createdStamp.toString())
       // this.order.estimatedDeliveryDate = this.formatTime(this.order.estimatedDeliveryDate.toString())
        this.order.orderItemSeqId = this.generateNewOrderItemSeqId();
        if (this.isValidated()) {
            this.orderService.create(this.order)
                .then(() => this.order = new Order())
        }
    }

    saveAndGoBackToActiveOrders() {
        this.save()
        window.location.href = "/mf-order/mf-active-orders"
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }

    generateNewOrderItemSeqId() {
        let name = ""
        var chars = '0123456789'
        for ( var j = 0; j < 10; j++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return name
    }

    generateNewOrderId() {
        let name = ""
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for ( var j = 0; j < 10; j++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return name
    }

    formatTime(timeStamp: String) {
        if (timeStamp == null) return ""
        let date = new Date(parseInt(timeStamp.toString()));
        return date
    }

}
