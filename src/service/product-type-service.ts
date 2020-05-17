import {Service} from "./service";
import {ProductType} from "../model/product-type";

export class ProductTypeService extends Service {

    getAll() {
        return this.get("/entities/ProductType");
    }

    create(productType: ProductType) {
        return this.post('/entities/ProductType', productType.toJson())
    }

    update(productType: ProductType) {
        return this.put('/entities/ProductType', productType.toJson())
    }

    deleteProductType(productType: ProductType) {
        return this.deleteProductTypeFromback('/entities/ProductType', productType.productTypeId)
    }

}
