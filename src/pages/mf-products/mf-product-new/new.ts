import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product-service";

@inject(ProductService, ValidationControllerFactory, ValidationController)
export class New {

    product = new Product();
    controller = null;

    constructor(private productService: ProductService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
        this.initRules()
    }

    initRules() {
    }

    save() {
        if (this.isValidated()) {
            this.productService.create(this.product)
                .then(() => this.product = new Product())
        }
    }

    saveAndGoToProducts() {
        this.save()
        window.location.href = "/mf-products/mf-products-overview"
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }
}
