import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("poe.ninja - Currency", function () {
    this.timeout(10000);

    it("#get(league, type) - should return currency overview", async () => {
        await expect(API.get("Standard", "Currency")).to.be.fulfilled;
    });

    it("#getHistory(league, type, id) - should return currency history for a specific currency", async () => {
        await expect(API.getHistory("Standard", "Currency", 2)).to.be.fulfilled;
    });
});
