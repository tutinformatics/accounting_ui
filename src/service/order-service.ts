import {Service} from "./service";
import {Order} from "../model/order";

export class OrderService extends Service {

    getAll() {
        return this.get("/entities/OrderItem");
    }

    create(order: Order) {
        order.orderId = "DEMO10090";
        return this.post('/entities/OrderItem', order.toJson())
    }

    update(order: Order) {
        return this.put('/entities/OrderItem', order.toJson())
    }

    deleteOrder(order: Order) {
        return this.delete('/entities/OrderItem', order.orderId, order.orderItemSeqId)
    }

}
