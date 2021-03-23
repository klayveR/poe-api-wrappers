import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Private Leagues", function () {
    this.timeout(10000);

    let sessionId: string;

    before(() => {
        sessionId = process.env["POESESSID"] as string;
    });

    it("#getMembers() - should return list of private league members", async () => {
        await expect(API.getMembers("7494", sessionId)).to.be.fulfilled;
    });
});
