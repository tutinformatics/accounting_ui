import {inject} from "aurelia-dependency-injection";
import {ProductTypeService} from "../../../service/product-type-service";
import {ProductType} from "../../../model/product-type";

@inject(ProductTypeService)
export class Items {

    productTypes: [ProductType];

    constructor(private productTypeService: ProductTypeService) {
        this.loadData()
    }

    private loadData() {
        this.productTypeService.getAll()
            .then(res => this.productTypes = res)
    }

    goToProductTypeView(productTypeId: String, description: String) {
        sessionStorage.setItem("productTypeId", productTypeId.toString());

        if (description == null) {
            sessionStorage.setItem("description", "");
        } else {
            sessionStorage.setItem("description", description.toString());
        }

        window.location.href = "/mf-product-type/mf-product-type-view"
    }
}
