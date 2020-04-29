import {inject} from "aurelia-dependency-injection";
import {ProductService} from "../../../service/product-service";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Product} from "../../../model/product";

@inject(ProductService)
export class Items {

    products: [Product]

    constructor(private productService: ProductService) {
        this.loadData()
    }

    private loadData() {
        this.productService.getAll()
            .then(res => this.products = res)
    }
}
