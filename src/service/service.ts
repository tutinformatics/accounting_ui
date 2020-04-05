import {autoinject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class Service {
    constructor(protected http: HttpClient) {
        this.http.configure(config => {
            config
                .withBaseUrl('api/v2/')
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
}
