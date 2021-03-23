import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { plainToClass } from "class-transformer";

import CachedLadder from "../../resource/ladder.json";
import { Ladder } from "./Ladder";

describe("Path of Exile - Ladders - Entry", function () {
    let ladder: Ladder;

    before(() => {
        ladder = plainToClass(Ladder, CachedLadder);
    });

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
