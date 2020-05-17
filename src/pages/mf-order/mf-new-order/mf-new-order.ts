import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order-service";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product-service";
import {OrderTypeService} from "../../../service/order-type-service";
import {OrderItemType} from "../../../model/orderItemType";

@inject(OrderService, OrderTypeService, ProductService, ValidationControllerFactory, ValidationController)
export class MfNewOrder {

    order = new Order();
    controller = null;

    products: [Product];
    orderTypes: [OrderItemType];
    selectedProductIds = [];
    selectedOrderTypeId = [];

    private loadData() {
        this.productService.getAll()
            .then(res => this.products = res);
        this.orderTypeService.getAll()
            .then(res => this.orderTypes = res);
    }

    constructor(private orderService: OrderService, private orderTypeService: OrderTypeService, private productService: ProductService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
        this.loadData();
    }

    save() {
        this.order.productId = this.selectedProductIds.toString();
        this.order.orderItemSeqId = this.generateNewOrderItemSeqId();
        this.order.orderItemTypeId = this.selectedOrderTypeId.toString();
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
