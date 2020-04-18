import {Service} from "./service";

export class BillingAccountService extends Service{
    getAll() {
        return this.get("/entities/BillingAccount");
    }
}
