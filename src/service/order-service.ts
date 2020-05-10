import {Service} from "./service";
import {Order} from "../model/order";

export class OrderService extends Service {

    getAll() {
        return this.get("/entities/OrderItem");
    }

    create(order: Order) {
        console.log("add this order" + order);
        //order.orderId = "123"; // dont try this at home
        order.orderId = this.createId();
        order.ORDER_ITEM = this.createId();
        return this.post('/entities/OrderItem', order.toJson())
    }

    update(order: Order) {
        return this.put('/entities/OrderItem', order.toJson())
    }

    deleteOrder(order: Order) {
        console.log("Am I even here?")
        console.log(order)
        return this.delete('/entities/OrderItem', order.toJson())
    }

    createId() {
        let name = ""
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for ( var j = 0; j < 10; j++) {
            name += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return name
    }
}
