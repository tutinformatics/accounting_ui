import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product-service";
import {ProductType} from "../../../model/product-type";
import {ProductTypeService} from "../../../service/product-type-service";

@inject(ProductService, ProductTypeService, ValidationControllerFactory, ValidationController)
export class MfProductView {
    message: string;
    priceDetailText: String;
    productName: String;
    productId: String;
    productTypeId: String;
    productTypes: [ProductType];

    product = new Product();
    controller = null;

    private loadData() {
        this.productTypeService.getAll()
            .then(res => this.productTypes = res);
    }

    constructor(private productService: ProductService, private productTypeService: ProductTypeService, validationControllerFactory) {
        this.loadData();
        this.controller = validationControllerFactory.createForCurrentScope();

        this.priceDetailText = sessionStorage.getItem("priceDetailText");

        this.productName = sessionStorage.getItem("productName");

        this.productId = sessionStorage.getItem("productId");

        if (sessionStorage.getItem("productTypeId") != "") {
            this.productTypeId = sessionStorage.getItem("productTypeId").toString()
        }

    }

    saveChanges() {
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

    deleteProduct() {
        this.product.productId = this.productId.toString()
        this.product.productName = this.productName.toString()
        this.product.priceDetailText = parseInt(this.priceDetailText.toString(), 10)
        console.log(this.productService.deleteProduct(this.product))
        window.location.href = "/mf-products/mf-products-overview"
    }

    goToProductTypeView() {
        if (this.productTypeId == undefined || this.productTypeId == "") {
            return;
        }
        let productType;
        for (let i = 0; i < this.productTypes.length; i++) {
            if (this.productTypes[i].productTypeId == this.productTypeId) {
                productType = this.productTypes[i];
                break;
            }
        }
        sessionStorage.setItem("productTypeId", productType.productTypeId.toString());

        if (productType.description == null) {
            sessionStorage.setItem("description", "");
        } else {
            sessionStorage.setItem("description", productType.description.toString());
        }

        window.location.href = "/mf-product-type/mf-product-type-view"
    }

}
