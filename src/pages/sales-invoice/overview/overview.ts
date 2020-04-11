import {inject} from 'aurelia-framework';
import {InvoiceService} from "../../../service/invoice-service";

@inject(InvoiceService)
export class Overview {

  invoices = [];

  constructor(private invoiceService: InvoiceService) {
    this.getInvoices();
  }

  public getInvoices() {
    this.invoiceService.getOutgoing()
        .then(data => this.invoices = data)
  }

}
