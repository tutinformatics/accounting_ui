import { autoinject } from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class Service {
  constructor(private http: HttpClient) {}

  getAll() {
    let httpClient = new HttpClient();

    httpClient.configure(config => {
      config
        .withBaseUrl('api/')
        .withDefaults({
          mode: 'no-cors',
          credentials: 'same-origin',
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



    httpClient.fetch("http://localhost:4567/api/invoices")
      .then(response => {
        console.log(response.json());

      })
  }
}
