import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product-service";
import {ProductTypeService} from "../../../service/product-type-service";
import {ProductType} from "../../../model/product-type";

@inject(ProductService, ProductTypeService, ValidationControllerFactory, ValidationController)
export class New {

    product = new Product();
    controller = null;

    selectedProductTypeId = [];
    productTypes: [ProductType];

    private loadData() {
        this.productTypeService.getAll()
            .then(res => this.productTypes = res);
    }

    constructor(private productService: ProductService, private productTypeService: ProductTypeService, validationControllerFactory) {
        this.loadData();
        this.controller = validationControllerFactory.createForCurrentScope();
    }

    save() {
        this.product.productTypeId = this.selectedProductTypeId.toString();
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
