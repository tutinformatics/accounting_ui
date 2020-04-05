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
        this.invoiceService.getAll()
            .then(data => this.invoices = JSON.parse(data))
    }
}
