import {Service} from "./service";

export class InvoiceService extends Service {

    getAll() {
        return this.get("/Invoice");
    }

    getIncoming() {
        return this.get("/Invoice", {invoiceTypeId: 'PURCHASE_INVOICE'});
    }

    getOutgoing() {
        return this.get("/Invoice", {invoiceTypeId: 'SALES_INVOICE'});
    }

    createInvoice(invoice) {
        return; // TODO
    }
}
