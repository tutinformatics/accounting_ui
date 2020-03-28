import {HttpClient} from "aurelia-fetch-client";
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class New {

  constructor(private http: HttpClient) {
    //this.getInvoices()
  }

  public getInvoices() {
    this.http.fetch("invoices")
        .then(response => response.json())
        .then(r => console.log(r))
  }
}
