import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { plainToClass } from "class-transformer";

import CachedSearch from "../../../resource/trade_search.json";
import { Result } from "./Result";

describe("Path of Exile - Trade - Search - Result", function () {
    let result: Result;

    before(() => {
        result = plainToClass(Result, CachedSearch);
    });

    describe("#getNext()", () => {
        it("should get the next 3 items", async () => {
            const items = await result.getNextItems();
            expect(items).to.not.be.null;
            expect(items?.length).to.be.equal(3);
        });

        it("should return null if no more hashes available", async () => {
            const items = await result.getNextItems();
            expect(items).to.be.null;
        });
    });
});
