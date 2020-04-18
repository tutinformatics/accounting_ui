import {inject} from 'aurelia-framework';
import {Invoice} from "../../../model/invoice";
import {InvoiceService} from "../../../service/invoice-service";
import {ValidationController, ValidationControllerFactory, ValidationRules} from "aurelia-validation";
import {PartyService} from "../../../service/party-service";
import {Product} from "../../../model/product";
import {Party} from "../../../model/party";
import {ProductService} from "../../../service/product-service";

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
  products = [Product];

  constructor(private partyService: PartyService,
              private invoiceService: InvoiceService,
              private productService: ProductService,
              private controller: ValidationControllerFactory)
  {
    this.valController = controller.createForCurrentScope();
    this.initRules();
    this.initData();
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
