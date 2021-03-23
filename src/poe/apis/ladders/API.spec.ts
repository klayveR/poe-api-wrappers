import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Ladders", function () {
    this.timeout(10000);

    it("#get(id) - should return ladder for a specific league", async () => {
        await expect(API.get("Standard")).to.be.fulfilled;
    });
});
