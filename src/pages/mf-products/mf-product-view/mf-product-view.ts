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

    saveChanges() {
        console.log(this.productName)

        this.product.productId = this.productId.toString()
        this.product.productName = this.productName.toString()
        this.product.priceDetailText = parseInt(this.priceDetailText.toString(), 10)

        this.productService.update(this.product)
            .then(() => this.product = new Product())
    }

    saveChangesAndGoToProducts() {
        this.saveChanges()
        window.location.href = "/mf-products/mf-products-overview"
    }

}
