import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Guild", function () {
    this.timeout(10000);

    it("#get() - should return guild the account is in", async () => {
        await expect(API.get()).to.be.fulfilled;
    });

    it("#getStashHistory(guild) - should return the guild stash history", async () => {
        await expect(API.getStashHistory("374")).to.be.fulfilled;
    });

    it("#getPointTransactions() - should return the point transaction history of all guild members", async () => {
        await expect(API.getPointTransactions()).to.be.fulfilled;
    });

    it("#getAccountPointTransactions() - should return the point transaction history of the session account", async () => {
        await expect(API.getAccountPointTransactions()).to.be.fulfilled;
    });
});
