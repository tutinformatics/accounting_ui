import {Service} from "./service";

export class InvoiceService extends Service{

    getAll() {
        return this.http.fetch("Invoice")
            .then(response => response.json());
    }

    getIncoming() { // TODO
        return this.http.fetch("Invoice")
            .then(response => response.json());
    }

    getOutgoing() { // TODO
        return this.http.fetch("Invoice")
            .then(response => response.json());
    }

    createInvoice(invoice) {
        return; // TODO
    }
}
