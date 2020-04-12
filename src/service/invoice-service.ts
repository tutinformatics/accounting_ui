import {Service} from "./service";
import {Model} from "../model/model";

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

    createInvoice(invoice: Model) {
        return this.post("/services/createInvoice", invoice.toJson());
        // return this.post("/entities/Invoice", invoice.toJson());
    }
}
