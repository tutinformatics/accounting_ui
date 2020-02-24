import { autoinject } from "aurelia-framework";
import { Service } from "./test/service";

@autoinject
export class app {
  data;
  constructor(private service: Service) {
    console.log("this.data");
    this.getData();
  }

  public getData() {
    this.data = this.service.getAll();
    console.log(this.data);
  }


}
