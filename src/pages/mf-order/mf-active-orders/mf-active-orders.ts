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
        console.log("Orders coming")
        console.log(this.orders)
    }
}
