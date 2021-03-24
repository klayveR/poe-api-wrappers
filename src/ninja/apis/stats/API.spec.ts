import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("poe.ninja - Stats", function () {
    this.timeout(10000);

    it("#get() - should return stats", async () => {
        await expect(API.get()).to.be.fulfilled;
    });
});
