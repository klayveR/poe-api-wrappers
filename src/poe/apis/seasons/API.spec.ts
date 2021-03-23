import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Seasons", function () {
    this.timeout(10000);

    /**
     * API Methods
     */
    it("#get() - should return list of seasons", async () => {
        await expect(API.get()).to.be.fulfilled;
    });

    it("#getPlayerHistory(id, account) - should return season player history", async () => {
        await expect(API.getPlayerHistory("Race Season One", "Chris")).to.be.fulfilled;
    });
});
