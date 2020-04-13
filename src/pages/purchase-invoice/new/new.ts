import {Invoice} from "../../../model/invoice";
import {AccountRow} from "../../../model/accountRow";
import {InvoiceService} from "../../../service/invoice-service";
import {PartyService} from "../../../service/party-service";
import {inject} from "aurelia-framework";
import {ValidationRules, ValidationControllerFactory, ValidationController} from "aurelia-validation";
import {BillingAccountService} from "../../../service/billing-account-service";

@inject(PartyService, InvoiceService, BillingAccountService, ValidationControllerFactory, ValidationController)
export class New {
    invoice: Invoice = new Invoice();
    confirmString: String = "Kinnita";
    confirmed: boolean = false;
    createdTimeStamp = "";
    valController: ValidationController;
    daysTimeToPay = "";
    dateEnteredString = "";
    dueDateString = "";
    pickerOptions = {
        format: 'DD.MM.YYYY'
    };
    parties = [];
    billingAccounts = [];
    rows = [new AccountRow()];

    constructor(private partyService: PartyService,
                private invoiceService: InvoiceService,
                private billingAccountService: BillingAccountService,
                private controller: ValidationControllerFactory)
    {

        this.valController = controller.createForCurrentScope();
        this.initRules();
        this.initData();
    }

    initData() {
        this.partyService.getAll()
            .then(result => this.parties = result);

        this.billingAccountService.getAll()
            .then(result => this.billingAccounts = result);
    }

    initRules() {
        ValidationRules
            .ensure("createdStamp")
            .required()
            .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/)
            .on(this.invoice)
            .ensure("partyIdFrom")
            .required()
            .on(this.invoice)
            .ensure("daysTimeToPay")
            .required()
            .matches(/^[1-9]|[1-9][0-9]$/)
            .on(this);
    }

    addRow(){
        this.rows.push(new AccountRow())
    }

    removeRow(event) {
        this.rows.splice(event.target.id, 1);
    }

    processTaxValue(event) {
        let row = this.rows[event.target.id];
        if (row.tax == undefined) {
            row.tax = "20%";
        }
        let rowTax = row.tax;
        rowTax = rowTax.substring(0, rowTax.length - 1);
        let tax = +rowTax;
        row.valueWithTax = +row.itemValue + +row.itemValue * 0.01 * tax;
        row.valueWithTax = +row.valueWithTax.toFixed(2);
        row.taxValue = row.itemValue * 0.01 * tax;
        row.taxValue = +row.taxValue.toFixed(2);
    }

    createInvoice() {
        // TODO: Validate @Marten
        this.invoice.invoiceTypeId = 'PURCHASE_INVOICE';
        console.log(this.invoice);
        if (this.isInputsValidated()) {
            this.invoiceService.createInvoice(this.invoice)
                .then(res => console.log(res))
                .then(_ => this.invoice = new Invoice());
        }
    }

    isInputsValidated() {
        if (this.valController.errors.length > 0 || this.daysTimeToPay.length == 0) {
            return false
        }
        return true
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
        let date = this.parse(this.dateEnteredString);
        let dueDate = this.addDays(date, +this.daysTimeToPay);
        this.invoice.createdStamp = date;
        this.invoice.dueDate = date;
        this.dueDateString = dueDate.getDate() + "." + (dueDate.getMonth() + 1) + "." + dueDate.getFullYear();
    }

    addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    parse(str) {
        const y = str.substr(6,4),
            m = str.substr(3,2),
            d = str.substr(0,2);
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
