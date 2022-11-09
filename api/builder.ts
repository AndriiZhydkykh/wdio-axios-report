import {Method} from 'axios'
const Options=require('axios')
const axios = require('axios');

export class JsonRequest {
    protected options:any = {
        responseType: 'json',
    };
    public url(url: string | URL): this {
        this.options.url= url
        return this
    }
    public method(method: Method): this {
        this.options.method = method
        return this
    }
   public params(params: typeof Options["params"]):this {
        this.options.params = params
        return this
    } 

    public data(data: any): this {
        this.options.data = data;
        return this;
        
    };
    public async send() {
        return axios(this.options)
    }
}