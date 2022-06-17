import {RequestBuilders} from "./requestBuilders";
import axios, {AxiosResponse} from "axios";
import {UploadFile} from "./requestBuilders";

export class RequestSender
{
    private _builder: RequestBuilders;

    constructor(builder: RequestBuilders) {
        this._builder = builder;
    }

    public build(): object {
        this._builder.setHeaders();
        this._builder.setBody()
        return this._builder.getRequest;
    }

    public send(): Promise<AxiosResponse>{
        return axios(this.build());
    }
}
