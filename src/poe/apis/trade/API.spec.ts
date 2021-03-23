import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Trade", function () {
    this.timeout(10000);

    let sessionId: string;

    before(() => {
        sessionId = process.env["POESESSID"] as string;
    });

    /**
     * API Methods
     */
    it("#getLeagues() - should return list of trade leagues", async () => {
        await expect(API.getLeagues()).to.be.fulfilled;
    });

    it("#getItems() - should return list of trade items", async () => {
        await expect(API.getItems()).to.be.fulfilled;
    });

    it("#getStats() - should return list of trade stats", async () => {
        await expect(API.getStats()).to.be.fulfilled;
    });

    it("#getStatic() - should return list of trade static items", async () => {
        await expect(API.getStatic()).to.be.fulfilled;
    });

    it("#search() - should return search results", async () => {
        const query = {
            query: { status: { option: "online" }, stats: [{ type: "and", filters: [] }] },
            sort: { price: "asc" },
        };

        await expect(API.search("Standard", query, sessionId)).to.be.fulfilled;
    });

    it("#exchange() - should return exchange results", async () => {
        const query = {
            exchange: {
                status: { option: "any" },
                have: ["ancient-orb"],
                want: ["mirror", "delirium-orb"],
            },
        };

        await expect(API.exchange("Standard", query, sessionId)).to.be.fulfilled;
    });

    it("#getFromHashes() - should return search results", async () => {
        const hashes = ["77ca9a932eb8c2dd078fd301d37cb872b54a862ee6a1467fdfd243334ac0a889"];

        await expect(API.getFromHashes(hashes)).to.be.fulfilled;
    });

    it("#getIgnoredAccounts() - should return list of ignored accounts", async () => {
        await expect(API.getIgnoredAccounts(sessionId)).to.be.fulfilled;
    });
});
