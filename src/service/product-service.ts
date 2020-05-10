import {Service} from "./service";
import {Product} from "../model/product";

export class ProductService extends Service {

    getAll() {
        return this.get("/entities/Product");
    }

    create(product: Product) {
        return this.post('/entities/Product', product.toJson())
    }

    update(product: Product) {
        return this.put('/entities/Product', product.toJson())
    }

    deleteProduct(product: Product) {
        //return this.delete('/entities/Product', product.toJson())
        //TODO @Liis, create your own
    }

}
