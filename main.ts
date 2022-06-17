import { expect } from 'chai';
import 'mocha';

import * as RequestsBuilders from "./requestBuilders";
import {RequestSender} from "./requestSender";

describe("Uploading file to DropBox", () => {
    it("Upload file", async () => {
        const res = await new RequestSender(new RequestsBuilders.UploadFile()).send();
        expect(res.status).to.equal(200);
    })
})

describe("Get file metadata from DropBox", () => {
    it("Get file metadata", async () => {
        const res = await new RequestSender(new RequestsBuilders.GetFileMetadata()).send();
        expect(res.status).to.equal(200);
    })
})

describe("Delete file from DropBox", () => {
    it("Delete file", async () => {
        const res = await new RequestSender(new RequestsBuilders.DeleteFile()).send();
        expect(res.status).to.equal(200);
    })
})

