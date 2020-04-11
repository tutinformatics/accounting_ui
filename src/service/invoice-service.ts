import {Service} from "./service";

export class InvoiceService extends Service {

    getAll() {
        return this.get("/Invoice");
    }

    getIncoming() { // TODO
        return this.get("/Invoice");
    }

    getOutgoing() { // TODO
        return this.get("/Invoice");
    }

    createInvoice(invoice) {
        return; // TODO
    }
}
