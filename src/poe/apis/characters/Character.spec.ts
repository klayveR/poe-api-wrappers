import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { plainToClass } from "class-transformer";

import CachedCharacters from "../../resource/characters.json";
import { Character } from "../characters";

describe("Path of Exile - Character - Character", function () {
    describe("Classes", () => {
        let characters: Character[];

        before(() => {
            characters = plainToClass(Character, CachedCharacters);
        });

        it("#levelProgression - should return level progression of the character", () => {
            expect(characters[0].levelProgression).to.be.below(1);
            expect(characters[1].levelProgression).to.be.above(1);
            expect(characters[2].levelProgression).to.be.above(15);
            expect(characters[23].levelProgression).to.equal(0);
        });
    });
});
