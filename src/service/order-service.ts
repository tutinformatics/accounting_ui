import {Service} from "./service";
import {Order} from "../model/order";

export class OrderService extends Service {

    getAll() {
        return this.get("/entities/OrderContent");
    }

    create(order: Order) {
        return this.post('/entities/OrderContent', order.toJson())
    }

    update(order: Order) {
        return this.put('/entities/OrderContent', order.toJson())
    }

    deleteOrder(order: Order) {
        return this.delete('/entities/OrderContent', order.toJson())
    }
}
