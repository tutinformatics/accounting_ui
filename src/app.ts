import { autoinject } from "aurelia-framework";
import {PLATFORM} from 'aurelia-pal';
import { Service } from "./test/service";
import {RouterConfiguration, Router} from 'aurelia-router';
import 'bootstrap/dist/css/bootstrap.css';

@autoinject
export class app {
  router: Router;
  data;

  configureRouter(config: RouterConfiguration, router: Router): void {
    console.log('configureRouter');
    this.router = router;
    config.title = "Router Test";
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {route:[ "", "login"], name: 'login', moduleId: PLATFORM.moduleName('login/login'), nav: false, title:'Login'},
      {route:["ostuarve-sisestamine"], name: 'ostuarve-sisestamine', moduleId: PLATFORM.moduleName('ostuarve-sisestamine/ostuarve-sisestamine'), nav: true, title:'arve'},
      {route:["ostuarve-vaade"], name: 'ostuarve-sisestamine', moduleId: PLATFORM.moduleName('ostuarve-vaade/ostuarve-vaade'), nav: true, title:'arve'}
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
