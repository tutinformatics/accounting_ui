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
      {route:[ "login"], name: 'login', moduleId: PLATFORM.moduleName('login/login'), nav: false, title:'Login'},
      {route:[ "", "home"], name: 'home', moduleId: PLATFORM.moduleName('home/home'), nav: false, title:'Home'},
      {route:["ostuarve-sisestamine"], name: 'ostuarve-sisestamine', moduleId: PLATFORM.moduleName('ostuarve/ostuarve-sisestamine/ostuarve-sisestamine'), nav: true, title:'arve'},
      {route:["ostuarvete-vaade"], name: 'ostuarvete-sisestamine', moduleId: PLATFORM.moduleName('ostuarve/ostuarvete-vaade/ostuarvete-vaade'), nav: true, title:'arve'},
      {route:["muugiarve-sisestamine"], name: 'muugiarve-sisestamine', moduleId: PLATFORM.moduleName('muugiarve/muugiarve-sisestamine/muugiarve-sisestamine'), nav: true, title:'arve'},
      {route:["muugiarvete-vaade"], name: 'muugiarvete-vaade', moduleId: PLATFORM.moduleName('muugiarve/muugiarvete-vaade/muugiarvete-vaade'), nav: true, title:'arve'}
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
