import {HttpClient} from "aurelia-fetch-client";
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class OstuarveteVaade {

    invoices = [];

    constructor(private http: HttpClient) {
        this.getInvoices();
    }

    public getInvoices() {
        this.http.fetch("invoices")
            .then(response => response.json())
            .then(data => this.invoices = JSON.parse(data))
    }
}
