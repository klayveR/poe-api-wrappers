import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import { Chunk } from "./Chunk";

describe("Path of Exile - Public stash tabs - Chunk", function () {
    this.timeout(30000);

    it("#getNext(id) - should return next public stash tab chunk", async () => {
        const chunk = new Chunk();
        chunk.nextChangeId = "2949-5227-4536-5439-1849";

        await expect(chunk.getNext()).to.be.fulfilled;
    });
});
