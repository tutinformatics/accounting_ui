import {Product} from "./product";

export class AccountRow {
    rowId: number;
    account: string;
    accountDescription: string;
    itemValue: number;
    withDiscount: number;
    discount: number = 0;
    itemAmount: number;
    purchaseProduct: Product;
    tax: string;
    valueWithTax: number;
    taxValue: number;
}
