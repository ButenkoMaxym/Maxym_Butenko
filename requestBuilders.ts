export abstract class RequestBuilders
{
    public static readonly path : string = "/files/Screenshot_3.png";
    public static readonly token : string = "Bearer sl.BJtN9NCmhG7vUoeyDfEEXWJE9RDf14f9QYbd6Fp5EGOkPpzVSbycTBbb0mwODcR3auAgS3HyC37BX7sJXkAeEm0Xni1OkAEgIok4QJZML1FnsBHxcBpT8gSv2DcFT_cELhjflXGZ";

    public abstract setHeaders(): void ;
    public abstract setBody(): void ;
    public abstract get getRequest(): object;
}

export class UploadFile extends RequestBuilders {
    private request: {[k: string]: any};

    constructor() {
        super();
        this.request = {
            method: 'post',
            url: "https://content.dropboxapi.com/2/files/upload",
            headers: {},
            data: {}
        }
    }

    get getRequest() {
        return this.request;
    }

    public override setHeaders(): void {
        this.request['headers']['Content-Type'] = 'application/octet-stream';
        this.request['headers']['Authorization'] = RequestBuilders.token;
        this.request['headers']['Dropbox-API-Arg'] = `{"mode":"add","path":"${RequestBuilders.path}","mute":false,"autorename":true}`;

    }

    public override setBody(): void {
        this.request["data"]["binary"] = ".." + RequestBuilders.path;
    }
}


export class GetFileMetadata extends RequestBuilders {
    private request: {[k: string]: any};

    constructor() {
        super();
        this.request = {
            method: 'post',
            url: "https://api.dropboxapi.com/2/files/get_metadata",
            headers: {},
            data: {}
        }
    }

    get getRequest() {
        return this.request;
    }

    public override setHeaders(): void {
        this.request['headers']['Content-Type'] = 'application/json';
        this.request['headers']['Authorization'] = RequestBuilders.token;
    }

    public override setBody(): void {
        this.request["data"]["path"] = RequestBuilders.path;
    }
}


export class DeleteFile extends RequestBuilders {
    private request: {[k: string]: any};

    constructor() {
        super();
        this.request = {
            method: 'post',
            url: "https://api.dropboxapi.com/2/files/delete_v2",
            headers: {},
            data: {}
        }
    }

    get getRequest() {
        return this.request;
    }

    public override setHeaders(): void {
        this.request['headers']['Content-Type'] = 'application/json';
        this.request['headers']['Authorization'] = RequestBuilders.token;
    }

    public override setBody(): void {
        this.request["data"]["path"] = RequestBuilders.path;
    }
}