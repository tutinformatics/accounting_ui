import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class Service {
    constructor(private http: HttpClient) {
        this.http.configure(config => {
            config
                .withBaseUrl('api/')
                .withDefaults({
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch'
                    }
                })
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    response(response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response;
                    }
                });
        });
    }

    getAll() {
        console.log("Getting data");
        this.http.fetch("invoices")
            .then(response => {
                console.log(response);
                console.log("json", response.json());
            })
    }
}
