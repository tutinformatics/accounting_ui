import {Invoice} from "../../../model/invoice";
import {Product} from "../../../model/product";
import {AccountRow} from "../../../model/account-row";
import {InvoiceService} from "../../../service/invoice-service";
import {PartyService} from "../../../service/party-service";
import {inject} from "aurelia-framework";
import {ValidationRules, ValidationControllerFactory, ValidationController} from "aurelia-validation";
import {BillingAccountService} from "../../../service/billing-account-service";
import {Party} from "../../../model/party";
import {BillingAccount} from "../../../model/billing-account";
import {TimeUtils} from "../../../util/time-utils";
import {Temporary} from "../../../model/temporary";

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
    parties = [Party];
    billingAccounts = [BillingAccount];
    rows = [new AccountRow()];
    product: Product;
    products = [];
    temporary: Temporary = new Temporary();

    constructor(private partyService: PartyService,
                private invoiceService: InvoiceService,
                private billingAccountService: BillingAccountService,
                private controller: ValidationControllerFactory)
    {

        this.valController = controller.createForCurrentScope();
        this.initRules();
        this.initData();

        this.product = new Product();
        this.product.productId = "Test50";
        this.product.createdStamp = new Date("30.03.2020");
        this.product.productName =  "Test";
        this.product.createdTxStamp = new Date("30.03.2020");
        this.product.lastUpdatedTxStamp = new Date("30.03.2020");
        this.product.description = "Test50";
        this.product.internalName = "Test50";
        this.product.lastUpdatedStamp = new Date("30.03.2020");
        this.product. price = 50;
        this.products.push(this.product);
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
        this.processTotalTax();
        this.processTotalValue();
    }

    processTaxValue(event) {
        let row = this.rows[event.target.id];
        if (row.tax == undefined) {
            row.tax = "20%";
        }
        if (row.itemAmount == undefined) {
            row.itemAmount = 1;
        }
        let rowTax = row.tax;
        rowTax = rowTax.substring(0, rowTax.length - 1);
        let tax = +rowTax;
        row.taxValue = (row.purchaseProduct.price * +row.itemAmount) * 0.01 * tax;
        row.taxValue = +row.taxValue.toFixed(2);
        row.valueWithTax = (+row.purchaseProduct.price * +row.itemAmount) + +row.taxValue;
        row.valueWithTax = +row.valueWithTax.toFixed(2);
        this.processTotalTax();
        this.processTotalValue();
    }

    processTotalTax() {
        var total = 0;
        for (let r of this.rows) {
            total += r.taxValue;
        }
        this.temporary.totalTax = total;
    }

    processTotalValue() {
        let total = 0;
        for (let r of this.rows) {
            total += r.valueWithTax;
        }
        this.temporary.totalValue = total;
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
        let date = TimeUtils.parse(this.dateEnteredString);
        let dueDate = TimeUtils.addDays(date, +this.daysTimeToPay);
        this.invoice.createdStamp = date;
        this.invoice.dueDate = date;
        this.dueDateString = dueDate.getDate() + "." + (dueDate.getMonth() + 1) + "." + dueDate.getFullYear();
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
