import {inject} from 'aurelia-framework';
import {Invoice} from "../../../model/invoice";
import {InvoiceService} from "../../../service/invoice-service";

@inject(InvoiceService)
export class New {

  invoice: Invoice = new Invoice();

  constructor(private invoiceService: InvoiceService) {
    //this.getInvoices()
  }

  createInvoice() {
    // TODO: Validate @Marten
    this.invoice.invoiceTypeId = 'SALES_INVOICE'
    this.invoiceService.createInvoice(this.invoice)
        .then(res => this.invoice = new Invoice());
  }

}
