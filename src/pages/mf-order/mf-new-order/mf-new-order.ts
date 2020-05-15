import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order-service";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product-service";

@inject(OrderService, ProductService, ValidationControllerFactory, ValidationController)
export class MfNewOrder {

    order = new Order();
    controller = null;

    products: [Product];
    selectedProductIds = [];

    private loadData() {
        this.productService.getAll()
            .then(res => this.products = res)
    }

    constructor(private orderService: OrderService, private productService: ProductService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
        this.initRules();
        this.loadData();
    }

    initRules() {
    }

    save() {
        this.order.productId = this.selectedProductIds.toString();
        this.order.orderItemSeqId = this.generateNewOrderItemSeqId();
        if (this.isValidated()) {
            this.orderService.create(this.order)
                .then(() => this.order = new Order())
        }
    }

    saveAndGoBackToActiveOrders() {
        this.save();
        window.location.href = "/mf-order/mf-active-orders"
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }

    generateNewOrderItemSeqId() {
        let name = "";
        var chars = '0123456789';
        for ( var j = 0; j < 10; j++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return name
    }


    formatTime(timeStamp: String) {
        if (timeStamp == null) return "";
        let date = new Date(parseInt(timeStamp.toString()));
        return date
    }

}
