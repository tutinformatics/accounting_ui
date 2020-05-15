import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Order} from "../../../model/order";
import {OrderService} from "../../../service/order-service";
import {ProductService} from "../../../service/product-service";
import {Product} from "../../../model/product";

@inject(OrderService, ProductService, ValidationControllerFactory, ValidationController)
export class MfOrderView {
    orderId: String;
    orderItemSeqId: String;
    unitPrice: String;
    createdStamp: Date;
    estimatedDeliveryDate: Date;
    products: [Product];

    containsProducts: String = "None";
    order = new Order();
    controller = null;

    private loadData() {
        this.productService.getAll()
            .then(res => this.products = res)
    }

    constructor(private orderService: OrderService, private productService: ProductService, validationControllerFactory) {
        this.loadData();
        this.controller = validationControllerFactory.createForCurrentScope();

        this.orderId = sessionStorage.getItem("orderId");

        this.orderItemSeqId = sessionStorage.getItem("orderItemSeqId");

        this.unitPrice = sessionStorage.getItem("unitPrice");

        if (sessionStorage.getItem("createdStamp") != "") {
            this.createdStamp = new Date(parseInt(sessionStorage.getItem("createdStamp").toString()));
        }
        if (sessionStorage.getItem("estimatedDeliveryDate") != "") {
            this.estimatedDeliveryDate = new Date(parseInt(sessionStorage.getItem("estimatedDeliveryDate").toString()));
        }
        if (sessionStorage.getItem("containsProducts") != "") {
            this.containsProducts = sessionStorage.getItem("containsProducts").toString()
        }
    }

    saveChanges() {

        this.order.orderId = this.orderId.toString();
        this.order.orderItemSeqId = this.orderItemSeqId.toString();
        this.order.unitPrice = parseInt(this.unitPrice.toString(), 10);
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
        this.order.orderId = this.orderId.toString();
        this.order.unitPrice = parseInt(this.unitPrice.toString(), 10);
        this.order.createdStamp = this.createdStamp;
        this.order.orderItemSeqId = this.orderItemSeqId.toString();
        this.order.estimatedDeliveryDate = this.estimatedDeliveryDate;
        this.orderService.deleteOrder(this.order);
    }

    goToProductView() {
        if (this.containsProducts == "None" || this.containsProducts == undefined || this.containsProducts == "") {
            return;
        }
        let product;
        for (let i = 0; i < this.products.length; i++) {
            console.log("currently checking " + this.products[i].productId)
            if (this.products[i].productId == this.containsProducts) {
                product = this.products[i];
                break;
            }
        }
        sessionStorage.setItem("productId", product.productId.toString());

        if (product.productName == null) {
            sessionStorage.setItem("productName", "");
        } else {
            sessionStorage.setItem("productName", product.productName.toString());
        }

        if (product.priceDetailText == null) {
            sessionStorage.setItem("priceDetailText", "");
        } else {
            sessionStorage.setItem("priceDetailText", product.priceDetailText.toString());
        }

        window.location.href = "/mf-products/mf-product-view"
    }

}
