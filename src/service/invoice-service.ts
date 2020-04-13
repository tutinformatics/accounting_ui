import {Service} from "./service";
import {Invoice} from "../model/invoice";
import {InvoiceItem} from "../model/invoice-item";

export class InvoiceService extends Service {

    getAll() {
        return this.get("/entities/Invoice");
    }

    getIncoming() {
        return this.get("/entities/Invoice", {invoiceTypeId: 'PURCHASE_INVOICE'});
    }

    getOutgoing() {
        return this.get("/entities/Invoice", {invoiceTypeId: 'SALES_INVOICE'});
    }

    createInvoice(invoice: Invoice) {
        // return this.post("/services/createInvoice", invoice.toJson());
        return this.post("/entities/Invoice", invoice.toJson());

        for (let item of invoice.items) {
            item.invoiceId = invoice.invoiceId;
            this.createInvoiceItem(item);
        }
    }

    protected createInvoiceItem(invoiceItem: InvoiceItem) {
        return this.post("/entities/InvoiceItem", invoiceItem.toJson());
    }
}
