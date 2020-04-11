import {inject} from 'aurelia-framework';
import {InvoiceService} from "../../../service/invoice-service";

@inject(InvoiceService)
export class Overview {

    invoices = [];

    constructor(private invoiceService: InvoiceService) {
        this.getInvoices();
    }

    public sortBy(prop) {
        this.invoices = this.invoices.sort((a, b) => {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
            return 0;
        })
    }

    public getInvoices() {
        this.invoiceService.getIncoming()
            .then(res => this.invoices = res);
    }

    public getTotal(invoice) {
        let amount = 0;
        for (let i = 0; i < invoice.invoiceItemIdValues.length; i++) {
            amount += invoice.invoiceItemIdValues[i].amount;
        }
    }
}
