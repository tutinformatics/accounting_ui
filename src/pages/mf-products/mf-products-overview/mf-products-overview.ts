import {inject} from "aurelia-dependency-injection";
import {ProductService} from "../../../service/product-service";
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

    goToProductView(productId: String, productName: String, priceDetailText: String, productTypeId: String) {
        sessionStorage.setItem("productId", productId.toString());

        if (productName == null) {
            sessionStorage.setItem("productName", "");
        } else {
            sessionStorage.setItem("productName", productName.toString());
        }

        if (priceDetailText == null) {
            sessionStorage.setItem("priceDetailText", "");
        } else {
            sessionStorage.setItem("priceDetailText", priceDetailText.toString());
        }

        if (productTypeId == null) {
            sessionStorage.setItem("productTypeId", "");
        } else {
            sessionStorage.setItem("productTypeId", productTypeId.toString());
        }

        window.location.href = "/mf-products/mf-product-view"
    }
}
