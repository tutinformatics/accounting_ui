import {HttpClient} from "aurelia-fetch-client";
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class Overview {

    invoices = [];

    constructor(private http: HttpClient) {
        this.getInvoices();
    }

    public sortBy(prop) {
        this.invoices = this.invoices.sort((a, b) => {
            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
            return 0;
        })
    }

    public getInvoices() {
        this.http.fetch("invoices")
            .then(response => response.json())
            .then(data => this.invoices = JSON.parse(data))
    }
}
