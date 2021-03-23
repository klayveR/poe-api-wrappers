import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { plainToClass } from "class-transformer";

import CachedLadder from "../../resource/ladder.json";
import { Ladder } from "./Ladder";

describe("Path of Exile - Ladders - Ladder", function () {
    let ladder: Ladder;

    before(() => {
        ladder = plainToClass(Ladder, CachedLadder);
    });

    describe("#getNextEntries()", () => {
        let mockLadder: Ladder;

        before(() => {
            mockLadder = new Ladder();
            mockLadder.entries = [];
            mockLadder.total = 15000;
        });

        it("should fetch the next 20 entries", async () => {
            const entries = await mockLadder.getNextEntries();
            expect(entries).to.not.be.null;
            expect(entries?.length).to.be.equal(20);
        });

        it("should have appended the entries to the ladder", () => {
            expect(mockLadder.entries.length).to.be.equal(20);
        });

        it("should set the limit correctly if it would otherwise exceed the total", async () => {
            mockLadder.options = { offset: 14975 };
            const entries = await mockLadder.getNextEntries();
            expect(entries).to.not.be.null;
            expect(entries?.length).to.be.equal(5);
        });

        it("should return null if no more entries available", async () => {
            mockLadder.options = { offset: 15000 };
            const result = await mockLadder.getNextEntries();
            expect(result).to.be.null;
        });
    });

    it("#filterByCharacter() - should return all Scions", () => {
        const occultists = ladder.filterByCharacter("class", "Scion");
        expect(occultists.length).to.equal(6);
    });

    it("#filterBy() - should return all public entries", () => {
        const publicEntries = ladder.filterBy("public", true);
        expect(publicEntries.length).to.equal(9);
    });

    // I have no idea how to test this stuff
    it("#toPlain() - should return a plain javascript object", () => {
        const plain: unknown = ladder.toPlain();
        expect(Object.prototype.hasOwnProperty.call(plain, "entries")).to.be.true;
    });
});
