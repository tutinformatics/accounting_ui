import {Service} from "./service";
import {OrderItemType} from "../model/orderItemType";

export class OrderTypeService extends Service {

    getAll() {
        return this.get("/entities/OrderItemType");
    }

    create(orderItemType: OrderItemType) {
        return this.post('/entities/OrderItemType', orderItemType.toJson())
    }

    update(orderItemType: OrderItemType) {
        return this.put('/entities/OrderItemType', orderItemType.toJson())
    }

    deleteOrderType(orderItemType: OrderItemType) {
        return this.deleteOrderTypeFromBack('/entities/OrderItemType', orderItemType.orderItemTypeId)
    }

}
