import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("poe.ninja - Item", function () {
    this.timeout(10000);

    it("#get(league, type) - should return item overview", async () => {
        await expect(API.get("Standard", "UniqueMap")).to.be.fulfilled;
    });

    it("#getHistory(league, type, id) - should return item history for a specific currency", async () => {
        await expect(API.getHistory("Standard", "UniqueMap", 45923)).to.be.fulfilled;
    });
});
