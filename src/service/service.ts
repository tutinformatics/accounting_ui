import {autoinject} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";

@autoinject
export class Service {
    constructor(protected http: HttpClient) {
        this.http.configure(config => {
            config
                .withBaseUrl('/api/generic/v1/entities')
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

    protected formatUrl(url: string, params: Object) {
        const esc = encodeURIComponent;
        const query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');
        return query.length > 0 ? url + '?' + query : url;
    }

    get(url: string, params: Object = {}) {
        const formattedUrl = this.formatUrl(url, params);
        return this.http.fetch(formattedUrl)
            .then(response => response.json())
    }

    post(url: string, data: any) {
        return this.http.fetch(url, {
            method: 'post',
            body: json(data)
        })
            .then(response => response.json());
    }
}
