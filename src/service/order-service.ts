import {Service} from "./service";
import {Order} from "../model/order";

export class OrderService extends Service {

    getAll() {
        return this.get("/entities/Order");
    }

    create(order: Order) {
        return this.post('/entities/Order', order.toJson())
    }
}
