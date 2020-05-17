import {inject} from "aurelia-dependency-injection";
import {ValidationController, ValidationControllerFactory} from "aurelia-validation";
import {OrderTypeService} from "../../../service/order-type-service";
import {OrderItemType} from "../../../model/orderItemType";
import {ProductTypeService} from "../../../service/product-type-service";
import {ProductType} from "../../../model/product-type";

@inject(ProductTypeService, ValidationControllerFactory, ValidationController)
export class New {

    productType = new ProductType();
    controller = null;

    constructor(private productTypeService: ProductTypeService, validationControllerFactory) {
        this.controller = validationControllerFactory.createForCurrentScope();
    }

    save() {
        if (this.isValidated()) {
            this.productTypeService.create(this.productType)
                .then(() => this.productType = new ProductType())
        }
    }

    saveAndGoToProductTypeOverview() {
        this.save();
        window.location.href = "/mf-product-type/mf-product-type-overview"
    }

    isValidated() {
        if (this.controller.errors.length > 0) {
            return false
        }
        return true
    }
}
