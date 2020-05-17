import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {ProductTypeService} from "../../../service/product-type-service";
import {ProductType} from "../../../model/product-type";

@inject(ProductTypeService, ValidationControllerFactory, ValidationController)
export class MfOrderView {
    productTypeId: String;
    description: String;

    productType = new ProductType();
    controller = null;

    constructor(private productTypeService: ProductTypeService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();

        this.productTypeId = sessionStorage.getItem("productTypeId");

        if (sessionStorage.getItem("description") != "") {
            this.description = sessionStorage.getItem("description").toString();
        }
    }

    saveChanges() {

        this.productType.productTypeId = this.productTypeId.toString();
        this.productType.description = this.description.toString();

        this.productTypeService.update(this.productType)
            .then(() => this.productType = new ProductType())
    }

    saveChangesAndGoToProductTypeOverview() {
        this.saveChanges()
        window.location.href = "/mf-product-type/mf-product-type-overview"
    }

    deleteProductType() {
        this.productType.productTypeId = this.productTypeId.toString();
        this.productType.description = this.description.toString();
        this.productTypeService.deleteProductType(this.productType);
    }

}
