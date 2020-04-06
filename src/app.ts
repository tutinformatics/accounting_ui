import { autoinject } from "aurelia-framework";
import {PLATFORM} from 'aurelia-pal';
import { Service } from "./test/service";
import {RouterConfiguration, Router} from 'aurelia-router';
import 'bootstrap';

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
      //{route:["order/overview"], name: 'order/overview', moduleId: PLATFORM.moduleName('pages/order/overview/overview'), nav: true, title:'Order'},
      {route:["order/new"], name: 'order/new', moduleId: PLATFORM.moduleName('pages/order/new/new'), nav: true, title:'Order'},
      {route:["incoming-invoice/new"], name: 'incoming-invoice/new', moduleId: PLATFORM.moduleName('pages/incoming-invoice/new/new'), nav: true, title:'arve'},
      {route:["incoming-invoice/overview"], name: 'incoming-invoice/overview', moduleId: PLATFORM.moduleName('pages/incoming-invoice/overview/overview'), nav: true, title:'arve'},
      {route:["outgoing-invoice/new"], name: 'outgoing-invoice/new', moduleId: PLATFORM.moduleName('pages/outgoing-invoice/new/new'), nav: true, title:'arve'},
      {route:["outgoing-invoice/overview"], name: 'outgoing-invoice/overview', moduleId: PLATFORM.moduleName('pages/outgoing-invoice/overview/overview'), nav: true, title:'arve'}
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
