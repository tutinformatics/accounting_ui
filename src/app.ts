import { autoinject } from "aurelia-framework";
import {PLATFORM} from 'aurelia-pal';
import { Service } from "./service/service";
import {RouterConfiguration, Router} from 'aurelia-router';
import 'bootstrap';
import 'aurelia-bootstrap-datetimepicker';

@autoinject
export class app {
  router: Router;
  data;
  loggedIn = true;



  configureRouter(config: RouterConfiguration, router: Router): void {
    console.log('configureRouter');
    this.router = router;
    config.title = "Router Test";
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {route:[ "login"], name: 'login', moduleId: PLATFORM.moduleName('pages/login/login'), nav: false, title:'Login'},
      {route:[ "", "home"], name: 'home', moduleId: PLATFORM.moduleName('pages/home/home'), nav: false, title:'Home'},
      {route:["order/overview"], name: 'order/overview', moduleId: PLATFORM.moduleName('pages/order/overview/overview'), nav: true, title:'Order'},
      {route:["order/new"], name: 'order/new', moduleId: PLATFORM.moduleName('pages/order/new/new'), nav: true, title:'Order'},
      {route:["purchase-invoice/new"], name: 'purchase-invoice/new', moduleId: PLATFORM.moduleName('pages/purchase-invoice/new/new'), nav: true, title:'arve'},
      {route:["purchase-invoice/overview"], name: 'purchase-invoice/overview', moduleId: PLATFORM.moduleName('pages/purchase-invoice/overview/overview'), nav: true, title:'arve'},
      {route:["sales-invoice/new"], name: 'sales-invoice/new', moduleId: PLATFORM.moduleName('pages/sales-invoice/new/new'), nav: true, title:'arve'},
      {route:["sales-invoice/overview"], name: 'sales-invoice/overview', moduleId: PLATFORM.moduleName('pages/sales-invoice/overview/overview'), nav: true, title:'arve'},
      {route:["customer/customers"], name: 'customer/customers', moduleId: PLATFORM.moduleName('pages/customer/customers/customers'), nav: true, title:'customers'},
      {route:["customer/new-private"], name: 'customer/new-private', moduleId: PLATFORM.moduleName('pages/customer/new-private/new'), nav: true, title:'New Customer'},
      {route:["customer/new-business"], name: 'customer/new-business', moduleId: PLATFORM.moduleName('pages/customer/new-business/new'), nav: true, title:'New Customer'},
      {route:["item/items"], name: 'item/items', moduleId: PLATFORM.moduleName('pages/item/items/items'), nav: true, title:'items'},
      {route:["item/new"], name: 'item/new', moduleId: PLATFORM.moduleName('pages/item/new/new'), nav: true, title:'New Item'}
    ]);

    this.router = router;
    this.router.refreshNavigation();

  }
  constructor(private service: Service) {
    console.log("this.data");
    //this.getData();
  }

  public getData() {
    //this.data = this.service.getAll();
    //console.log(this.data);
  }

}
