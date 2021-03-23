import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { plainToClass } from "class-transformer";

import CachedCharacters from "../../resource/characters.json";
import { Character } from "../characters";
import * as API from "./API";

describe("Path of Exile - Character", function () {
    this.timeout(10000);

    /**
     * API Methods
     */
    it("#get(account) - should return list of characters of account", async () => {
        await expect(API.get("Mathil")).to.be.fulfilled;
    });

    it("#getItems(account, character) - should return character items", async () => {
        await expect(API.getItems("Mathil", "Mathil")).to.be.fulfilled;
    });

    it("#getPassiveSkills(account, character) - should return character passive skill tree", async () => {
        await expect(API.getPassiveSkills("Mathil", "Mathil")).to.be.fulfilled;
    });

    /**
     * Class Methods
     */
    describe("Classes", () => {
        let characters: Character[];

        before(() => {
            characters = plainToClass(Character, CachedCharacters);
        });

        describe("Character", () => {
            it("#levelProgression - should return level progression of the character", () => {
                expect(characters[0].levelProgression).to.be.below(1);
                expect(characters[1].levelProgression).to.be.above(1);
                expect(characters[2].levelProgression).to.be.above(15);
                expect(characters[23].levelProgression).to.equal(0);
            });
        });
    });
});
