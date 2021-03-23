import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { plainToClass } from "class-transformer";

import CachedLadder from "../../resource/ladder.json";
import * as API from "./API";
import { Ladder } from "./Ladder";

describe("Path of Exile - Ladders", function () {
    this.timeout(10000);

    /**
     * API Methods
     */
    it("#get(id) - should return ladder for a specific league", async () => {
        await expect(API.get("Standard")).to.be.fulfilled;
    });

    /**
     * Class Methods
     */
    describe("Classes", () => {
        let ladder: Ladder;

        before(() => {
            ladder = plainToClass(Ladder, CachedLadder);
        });

        describe("Ladder", () => {
            it("#filterByCharacter - should return all Scions", () => {
                const occultists = ladder.filterByCharacter("class", "Scion");
                expect(occultists.length).to.equal(6);
            });

            it("#filterBy - should return all public entries", () => {
                const publicEntries = ladder.filterBy("public", true);
                expect(publicEntries.length).to.equal(9);
            });
        });

        describe("LadderEntry", () => {
            it("#profileUrl - should return profile url", () => {
                expect(ladder.entries[0].profileUrl).to.equal(
                    "https://www.pathofexile.com/account/view-profile/Jin_melike"
                );
            });

            it("#characterWindowUrl - should return character window url", () => {
                expect(ladder.entries[0].characterWindowUrl).to.equal(
                    "https://www.pathofexile.com/account/view-profile/Jin_melike/characters?characterName=PenDora"
                );
            });
        });
    });
});
