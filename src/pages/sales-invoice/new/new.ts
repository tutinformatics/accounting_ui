import {inject} from 'aurelia-framework';
import {Invoice} from "../../../model/invoice";
import {InvoiceService} from "../../../service/invoice-service";
import {ValidationController, ValidationControllerFactory, ValidationRules} from "aurelia-validation";
import {PartyService} from "../../../service/party-service";
import {Product} from "../../../model/product";
import {Party} from "../../../model/party";
import {ProductService} from "../../../service/product-service";
import {AccountRow} from "../../../model/account-row";
import {Temporary} from "../../../model/temporary";

@inject(PartyService, InvoiceService, ProductService, ValidationControllerFactory, ValidationController)
export class New {

  invoice: Invoice = new Invoice();
  confirmString: String = "Kinnita";
  confirmed: boolean = false;
  createdTimeStamp = "";
  valController: ValidationController;
  daysTimeToPay = "";
  dateEnteredString = "";
  dueDateString = "";
  pickerOptions = {
    format: 'DD.MM.YYYY'
  };
  parties = [Party];
  rows = [new AccountRow()];
  product: Product;
  products = [];
  temporary: Temporary = new Temporary();

  constructor(private partyService: PartyService,
              private invoiceService: InvoiceService,
              private productService: ProductService,
              private controller: ValidationControllerFactory)
  {
    this.valController = controller.createForCurrentScope();
    this.initRules();
    this.initData();

    this.product = new Product();
    this.product.productId = "Test50";
    this.product.createdStamp = new Date("30.03.2020");
    this.product.productName =  "Test";
    this.product.createdTxStamp = new Date("30.03.2020");
    this.product.lastUpdatedTxStamp = new Date("30.03.2020");
    this.product.description = "Test50";
    this.product.internalName = "Test50";
    this.product.lastUpdatedStamp = new Date("30.03.2020");
    this.product. price = 50;
    this.products.push(this.product);

  }

  initData() {
    this.partyService.getAll()
        .then(result => this.parties = result);

    this.productService.getAll()
        .then(result => this.products = result)
        .then(r => console.log(this.products))
  }

  initRules() {
    ValidationRules
        .ensure("createdStamp")
        .required()
        .matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/)
        .on(this.invoice)
        .ensure("partyIdFrom")
        .required()
        .on(this.invoice)
        .ensure("daysTimeToPay")
        .required()
        .matches(/^[1-9]|[1-9][0-9]$/)
        .on(this);
  }

  addRow(){
    this.rows.push(new AccountRow())
  }

  removeRow(event) {
    this.rows.splice(event.target.id, 1);
  }

  calcPrice(event) {
    let row = this.rows[event.target.id];
    row.withDiscount = (row.purchaseProduct.price * row.itemAmount) - (row.purchaseProduct.price * row.itemAmount) * 0.01 * row.discount;
    row.withDiscount = +row.withDiscount.toFixed(2);
    this.calcTax(row);
  }

  calcDiscount(event) {
    let row = this.rows[event.target.id];
    row.discount = 100 - (row.withDiscount / (row.purchaseProduct.price * row.itemAmount) * 100);
    row.discount = +row.discount.toFixed(2);
    this.calcTax(row);
  }

  calcTax(r) {
    r.taxValue = +r.withDiscount  * 0.2;
    r.valueWithTax = +r.withDiscount +  +r.taxValue;
    r.taxValue = +r.taxValue.toFixed(2);
    r.valueWithTax = +r.valueWithTax.toFixed(2);
    this.calcTotal()
  }

  calcTotal() {
    var total = 0;
    for (let r of this.rows) {
      total += r.valueWithTax;
    }
    this.temporary.totalValue = total;
  }

  isInputsValidated() {
    if (this.valController.errors.length > 0 || this.daysTimeToPay.length == 0) {
      return false
    }
    return true
  }

  dueDateCreator() {
    this.valController.validate().then(result => {
      for (let e in result.results) {
        if ((result.results[e].propertyName == "daysTimeToPay" || result.results[e].propertyName == "createdStamp") && result.results[e].valid == false) {
          return
        }
      }
      this.generateDueDate()
    });
  }

  generateDueDate() {
    let date = this.parse(this.dateEnteredString);
    let dueDate = this.addDays(date, +this.daysTimeToPay);
    this.invoice.createdStamp = date;
    this.invoice.dueDate = date;
    this.dueDateString = dueDate.getDate() + "." + (dueDate.getMonth() + 1) + "." + dueDate.getFullYear();
  }

  addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  parse(str) {
    const y = str.substr(6,4),
        m = str.substr(3,2),
        d = str.substr(0,2);
    return new Date(y,m - 1,d);
  }

  confirm() {
    if (this.confirmed) {
      this.confirmed = !this.confirmed;
      this.confirmString = "Kinnita";
    } else {
      this.confirmed = !this.confirmed;
      this.confirmString = "Kinnitatud"
    }
  }

  createInvoice() {
    // TODO: Validate @Marten
    this.invoice.invoiceTypeId = 'SALES_INVOICE'
    console.log(this.invoice);
    if (this.isInputsValidated()) {
      this.invoiceService.createInvoice(this.invoice)
          .then(res => console.log(res))
          .then(_ => this.invoice = new Invoice());
    }
  }

}
