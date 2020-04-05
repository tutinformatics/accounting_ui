import {Service} from "./service";

export class InvoiceService extends Service{

    getAll() {
        return this.http.fetch("Invoice")
            .then(response => response.json());
    }
}
