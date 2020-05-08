import {autoinject} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";

const bearerTokenPrefix = 'Bearer '
const noExpirationToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyTG9naW5JZCI6ImFkbWluIiwiaXNzIjoiQXBhY2hlT0ZCaXoiLCJleHAiOjE1ODc4NDI5OTk5OTk3MTgsImlhdCI6MTU4Nzg0MDkxOH0.3hZCbPuEoqQOUTYws1UtPToVuCZrQfaAVYkZIkPvAVd3m1cN-scUpIYErZFGTmMMfYHTEoMlbNlTG5l2GfkDVg'

@autoinject
export class Service {
    constructor(protected http: HttpClient) {
        this.http.configure(config => {
            config
                .withBaseUrl('/api/generic/v1')
                .withDefaults({
                    headers: {
                        'Accept': 'application/json',
                        'X-Requested-With': 'Fetch',
                        'Authorization': bearerTokenPrefix + noExpirationToken
                    }
                })
                .withInterceptor({
                    request(request) {
                        console.info(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    requestError(error) {
                        console.error(`Request failed: ${error}`);
                        throw error;
                    },
                    response(response) {
                        console.info(`Received ${response.status} ${response.url}`);
                        return response;
                    },
                    responseError(error) {
                        console.error(`Response failed: ${error}`);
                        throw error;
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
        console.log(json(data));
        return this.http.fetch(url, {
            method: 'post',
            body: json(data)
        }).then(response => response.json());
    }

    put(url: string, data: any) {
        console.log(json(data));
        return this.http.fetch(url, {
            method: 'put',
            body: json(data)
        }).then(response => response.json());
    }

    delete(url: string, data: any) {
        // todo
    }
}