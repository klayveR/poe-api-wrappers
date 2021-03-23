import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { League } from "./League";

describe("Path of Exile - Leagues - League", function () {
    describe("#getLadder()", () => {
        let mockLeague: League;

        before(() => {
            mockLeague = new League();
            mockLeague.id = "Standard";
        });

        it("should fetch the ladder and store it", async () => {
            const ladder = await mockLeague.getLadder();
            expect(ladder).to.not.be.null;
        });

        it("should have stored the ladder in the league", () => {
            expect(mockLeague.ladder).to.not.be.undefined;
        });
    });
});
