import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - PVP", function () {
    this.timeout(10000);

    it("#getMatches() - should return list of PVP matches", async () => {
        await expect(API.getMatches()).to.be.fulfilled;
    });
});
