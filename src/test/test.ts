import { Service } from "./service";

export class test {
  data;
  constructor(private service: Service) {}

  public getData() {
    this.data = this.service.getAll()
  }
}
