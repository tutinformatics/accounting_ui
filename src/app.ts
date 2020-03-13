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
    config.map([
      {route:'', name: 'login', moduleId: PLATFORM.moduleName('login/login'), title:'login'}
    ]);

  }
  constructor(private service: Service) {
    console.log("this.data");
    this.getData();
  }

  public getData() {
    this.data = this.service.getAll();
    console.log(this.data);
  }

}
