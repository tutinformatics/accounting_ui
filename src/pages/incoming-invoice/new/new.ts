import {Invoice} from "../../../model/invoice";

export class New {
    invoice: Invoice = new Invoice();


    createInvoice() {
        console.log(this.invoice);
    }
}
