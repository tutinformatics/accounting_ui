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
    dateEntered = "";
    dateObject = "";
    pickerOptions = {
        format: 'DD.MM.YYYY'
    };

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

    dueDateCreator() {
        this.valController.validate().then(result => {
            for (let e in result.results) {
                if ((result.results[e].propertyName == "daysTimeToPay" || result.results[e].propertyName == "createdStamp") && result.results[e].valid == false) {
                    return
                }
            }
            this.generateDueDate()
        });
    }

    generateDueDate() {
        console.log(this.parse(this.invoice.createdStamp.toString()))
    }

    parse(str) {
        console.log(str)
        var y = str.substr(6,4),
            m = str.substr(3,2),
            d = str.substr(0,2);
        console.log(y, m, d);
        return new Date(y,m - 1,d);
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
