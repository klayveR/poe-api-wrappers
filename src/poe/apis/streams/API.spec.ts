import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Streams", function () {
    this.timeout(10000);

    it("#get() - should return list twitch streams", async () => {
        await expect(API.get()).to.be.fulfilled;
    });
});
