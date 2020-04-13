import {Service} from "./service";
import {Product} from "../model/product";

export class ProductService extends Service {

    getAll() {
        return this.get("/entities/Product");
    }

    create(product: Product) {
        return this.post('/entities/Product', product.toJson())
    }
}
