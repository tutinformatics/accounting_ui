import {inject} from 'aurelia-framework';
import {InvoiceService} from "../../../service/invoice-service";
import {TimeConverter} from '../../../util/time-converter';

@inject(InvoiceService)
export class Overview {

    invoices = [];
    sortAsc = true;

    constructor(private invoiceService: InvoiceService) {
        this.getInvoices();
    }

    public sortBy(prop) {
        this.invoices = this.invoices.sort((a, b) => {
            if (a[prop] > b[prop]) return this.sortAsc ? 1 : -1;
            if (a[prop] < b[prop]) return this.sortAsc ? -1 : 1;
            return 0;
        })
    }

    public getInvoices() {
        this.invoiceService.getIncoming()
            .then(res => this.invoices = res);
    }

    public convertTime(ms: number) {
        return TimeConverter.convertDate(ms);
    }

    public getTotal(invoice): number {
        let amount = 0;
        for (let i = 0; i < invoice.invoiceItemIdValues.length; i++) {
            amount += invoice.invoiceItemIdValues[i].amount;
        }
        return amount; // wtf is dis. no work?
    }
}
