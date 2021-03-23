import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Leagues", function () {
    this.timeout(10000);

    /**
     * API Methods
     */
    it("#get() - should return list of leagues", async () => {
        await expect(API.get()).to.be.fulfilled;
    });

    it("#getById(id) - should return data for a league", async () => {
        await expect(API.getById("Standard")).to.be.fulfilled;
    });

    it("#getRules() - should return all rules for leagues", async () => {
        await expect(API.getRules()).to.be.fulfilled;
    });

    it("#getRuleById(id) - should return all rules for a specific league", async () => {
        await expect(API.getRuleById("Hardcore")).to.be.fulfilled;
    });
});
