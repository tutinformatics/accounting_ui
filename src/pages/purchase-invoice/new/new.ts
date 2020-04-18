import {Invoice} from "../../../model/invoice";
import {InvoiceService} from "../../../service/invoice-service";
import {inject} from "aurelia-framework";
import {ValidationRules, ValidationControllerFactory, ValidationController} from "aurelia-validation";

@inject(InvoiceService, ValidationControllerFactory, ValidationController)
export class New {
    invoice: Invoice = new Invoice();
    confirmString: String = "Kinnita";
    confirmed: boolean = false;
    createdTimeStamp = "";
    valController: ValidationController;
    daysTimeToPay = "";

    constructor(private invoiceService: InvoiceService, private controller: ValidationControllerFactory) {
        this.valController = controller.createForCurrentScope();
        this.initRules();
    }

    initRules() {
        ValidationRules
            .ensure("createdStamp")
            .required()
            .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/)
            .on(this.invoice)
            .ensure("partyIdFrom")
            .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
            .maxLength(50)
            .required()
            .on(this.invoice)
            .ensure("daysTimeToPay")
            .required()
            .matches(/^[1-9]|[1-9][0-9]$/)
            .on(this);
    }

    createInvoice() {
        // TODO: Validate @Marten

        this.invoiceService.createInvoice(this.invoice)
            .then(res => console.log(res));

        this.invoice = new Invoice();
    }

    confirm() {
        if (this.confirmed) {
            this.confirmed = !this.confirmed;
            this.confirmString = "Kinnita";
        } else {
            this.confirmed = !this.confirmed;
            this.confirmString = "Kinnitatud"
        }
    }
}
