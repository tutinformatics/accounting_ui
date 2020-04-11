import {Invoice} from "../../../model/invoice";
import {InvoiceService} from "../../../service/invoice-service";
import {inject} from "aurelia-framework";

@inject(InvoiceService)
export class New {
    invoice: Invoice = new Invoice();

    constructor(private invoiceService: InvoiceService) {
    }

    createInvoice() {
        // TODO: Validate @Marten
        this.invoiceService.createInvoice(this.invoice);
        // TODO: Handle error, etc @Tavo
    }
}
