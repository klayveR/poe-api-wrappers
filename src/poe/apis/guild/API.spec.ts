import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Guild", function () {
    this.timeout(10000);

    let sessionId: string;

    before(() => {
        sessionId = process.env["POESESSID"] as string;
    });

    it("#get(session) - should return guild the account is in", async () => {
        await expect(API.get(sessionId)).to.be.fulfilled;
    });

    it("#getStashHistory(session, guild) - should return the guild stash history", async () => {
        await expect(API.getStashHistory("374", sessionId)).to.be.fulfilled;
    });

    it("#getPointTransactions(session) - should return the point transaction history of all guild members", async () => {
        await expect(API.getPointTransactions(sessionId)).to.be.fulfilled;
    });

    it("#getAccountPointTransactions(session) - should return the point transaction history of the session account", async () => {
        await expect(API.getAccountPointTransactions(sessionId)).to.be.fulfilled;
    });
});
