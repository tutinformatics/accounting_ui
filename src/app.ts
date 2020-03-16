import { autoinject } from "aurelia-framework";
import {PLATFORM} from 'aurelia-pal';
import { Service } from "./test/service";
import {RouterConfiguration, Router} from 'aurelia-router';

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
      {route:["ostuarve_sisestamine"], name: 'ostuarve_sisestamine', moduleId: PLATFORM.moduleName('ostuarve_sisestamine/ostuarve_sisestamine'), nav: true, title:'arve'},
      {route:["ostuarve_vaade"], name: 'ostuarve_sisestamine', moduleId: PLATFORM.moduleName('ostuarve_vaade/ostuarve_vaade'), nav: true, title:'arve'}
    ]);

    this.router = router;
    this.router.refreshNavigation();

  }
  constructor(private service: Service) {
    //console.log("this.data");
    //this.getData();
  }

  public getData() {
    //this.data = this.service.getAll();
    //console.log(this.data);
  }

}
