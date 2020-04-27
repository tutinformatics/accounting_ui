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
            {route:[ "", "home"], name: 'home', moduleId: PLATFORM.moduleName('pages/home/mf-home'), nav: false, title:'Home'},
            {route:["order/overview"], name: 'order/overview', moduleId: PLATFORM.moduleName('pages/order/overview/overview'), nav: true, title:'Order'},
            {route:["order/new"], name: 'order/new', moduleId: PLATFORM.moduleName('pages/order/new/new'), nav: true, title:'Order'},
            {route:["purchase-invoice/new"], name: 'purchase-invoice/new', moduleId: PLATFORM.moduleName('pages/purchase-invoice/new/new'), nav: true, title:'arve'},
            {route:["purchase-invoice/overview"], name: 'purchase-invoice/overview', moduleId: PLATFORM.moduleName('pages/purchase-invoice/overview/overview'), nav: true, title:'arve'},
            {route:["sales-invoice/new"], name: 'sales-invoice/new', moduleId: PLATFORM.moduleName('pages/sales-invoice/new/new'), nav: true, title:'arve'},
            {route:["sales-invoice/overview"], name: 'sales-invoice/overview', moduleId: PLATFORM.moduleName('pages/sales-invoice/overview/overview'), nav: true, title:'arve'},
            {route:["customer/customers"], name: 'customer/customers', moduleId: PLATFORM.moduleName('pages/customer/customers/customers'), nav: true, title:'customers'},
            {route:["customer/new"], name: 'customer/new', moduleId: PLATFORM.moduleName('pages/customer/new/new'), nav: true, title:'New Customer'},
            {route:["order/mf-active-orders"], name: 'order/mf-active-orders', moduleId: PLATFORM.moduleName('pages/order/mf-active-orders/mf-active-orders'), nav: true, title:'Active orders'},
            {route:["order/mf-orders-history"], name: 'order/mf-orders-history', moduleId: PLATFORM.moduleName('pages/order/mf-orders-history/mf-orders-history'), nav: true, title:'Orders history'},
            {route:["order/mf-new-order"], name: 'order/mf-new-order', moduleId: PLATFORM.moduleName('pages/order/mf-new-order/mf-new-order'), nav: true, title:'New order'},
            {route:["order/mf-order-view"], name: 'order/mf-order-view', moduleId: PLATFORM.moduleName('pages/order/mf-order-view/mf-order-view'), nav: true, title:'Order view'},
            {route:["order/mf-change-order"], name: 'order/mf-change-order', moduleId: PLATFORM.moduleName('pages/order/mf-change-order/mf-change-order'), nav: true, title:'Change order'}
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