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

            {route:["mf-order/mf-active-orders"], name: 'mf-order/mf-active-orders', moduleId: PLATFORM.moduleName('pages/mf-order/mf-active-orders/mf-active-orders'), nav: true, title:'Active orders'},
            {route:["mf-order/mf-orders-history"], name: 'mf-order/mf-orders-history', moduleId: PLATFORM.moduleName('pages/mf-order/mf-orders-history/mf-orders-history'), nav: true, title:'Orders history'},
            {route:["mf-order/mf-new-order"], name: 'mf-order/mf-new-order', moduleId: PLATFORM.moduleName('pages/mf-order/mf-new-order/mf-new-order'), nav: true, title:'New order'},
            {route:["mf-order/mf-order-view"], name: 'mf-order/mf-order-view', moduleId: PLATFORM.moduleName('pages/mf-order/mf-order-view/mf-order-view'), nav: true, title:'Order view'},
            {route:["mf-order/mf-change-order"], name: 'mf-order/mf-change-order', moduleId: PLATFORM.moduleName('pages/mf-order/mf-change-order/mf-change-order'), nav: true, title:'Change order'},

            {route:["workeffort/mf-workeffort"], name: 'workeffort/mf-workeffort', moduleId: PLATFORM.moduleName('pages/workeffort/mf-workeffort/mf-workeffort'), nav: true, title:'Work efforts'},
            {route:["workeffort/mf-new-workeffort"], name: 'workeffort/mf-new-workeffort', moduleId: PLATFORM.moduleName('pages/workeffort/mf-new-workeffort/mf-new-workeffort'), nav: true, title:'Add new work effort'},
            {route:["workeffort/mf-workeffort-view"], name: 'workeffort/mf-workeffort-view', moduleId: PLATFORM.moduleName('pages/workeffort/mf-workeffort-view/mf-workeffort-view'), nav: true, title:'Work effort view'},

            {route:["mf-products/mf-product-view"], name: 'mf-products/mf-product-view', moduleId: PLATFORM.moduleName('pages/mf-products/mf-product-view/mf-product-view'), nav: true, title:'Product view'},
            {route:["mf-products/mf-products-overview"], name: 'mf-products/mf-products-overview', moduleId: PLATFORM.moduleName('pages/mf-products/mf-products-overview/mf-products-overview'), nav: true, title:'Products overview'},
            {route:["mf-products/mf-product-new"], name: 'mf-products/mf-product-new', moduleId: PLATFORM.moduleName('pages/mf-products/mf-product-new/new'), nav: true, title:'New product'},

            {route:["mf-order-type/mf-order-type-view"], name: 'mf-order-type/mf-order-type-view', moduleId: PLATFORM.moduleName('pages/mf-order-type/mf-order-type-view/mf-order-type-view'), nav: true, title:'Order type view'},
            {route:["mf-order-type/mf-order-type-overview"], name: 'mf-order-type/mf-order-type-overview', moduleId: PLATFORM.moduleName('pages/mf-order-type/mf-order-type-overview/mf-order-type-overview'), nav: true, title:'Order types overview'},
            {route:["mf-order-type/mf-order-type-new"], name: 'mf-order-type/mf-order-type-new', moduleId: PLATFORM.moduleName('pages/mf-order-type/mf-order-type-new/mf-order-type-new'), nav: true, title:'New order type'},

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
