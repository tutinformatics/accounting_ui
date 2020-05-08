import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product-service";

@inject(ProductService, ValidationControllerFactory, ValidationController)
export class MfProductView {
    message: string;
    priceDetailText: String;
    productName: String;
    productId: String;

    product = new Product();
    controller = null;

    constructor(private productService: ProductService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();

        this.message = 'Hello world'

        this.priceDetailText = sessionStorage.getItem("priceDetailText");
        console.log(this.priceDetailText);

        this.productName = sessionStorage.getItem("productName");
        console.log(this.productName);

        this.productId = sessionStorage.getItem("productId");
        console.log(this.productId);

    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }

    saveChanges() {
        // todo saving logic

        window.location.href = "/mf-products/mf-products-overview"
    }

}
