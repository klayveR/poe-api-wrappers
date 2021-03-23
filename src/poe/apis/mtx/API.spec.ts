import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Microtransactions", function () {
    this.timeout(10000);

    /**
     * API Methods
     */
    it("#getSpecials() - should return list of mtx specials", async () => {
        await expect(API.getSpecials()).to.be.fulfilled;
    });
});
