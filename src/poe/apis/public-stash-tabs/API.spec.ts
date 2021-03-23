import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Public stash tabs", function () {
    this.timeout(30000);

    /**
     * API Methods
     */
    it("#getChunk() - should return public stash tab chunk", async () => {
        await expect(API.getChunk()).to.be.fulfilled;
    });

    it("#getChunk(id) - should return public stash tab chunk with specific change id", async () => {
        await expect(API.getChunk("2949-5227-4536-5439-1849")).to.be.fulfilled;
    });
});
