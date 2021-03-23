import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { Collection } from "./Collection";

describe("Path of Exile - Account - Avatars - Collection", function () {
    this.timeout(10000);

    let sessionId: string;

    before(() => {
        sessionId = process.env["POESESSID"] as string;
    });

    describe("#getNextPage()", () => {
        let mockCollection: Collection;

        before(() => {
            mockCollection = new Collection();
            mockCollection.collection = [];
            mockCollection.sessionId = sessionId;
        });

        it("should fetch the next 16 avatars", async () => {
            const avatars = await mockCollection.getNextPage();
            expect(avatars).to.not.be.null;
            expect(avatars?.length).to.be.equal(16);
        });

        it("should have appended the avatars to the collection", () => {
            expect(mockCollection.collection.length).to.be.equal(16);
        });

        it("should return null if no more entries available", async () => {
            mockCollection.options = { page: 1000 };
            const avatars = await mockCollection.getNextPage();
            expect(avatars).to.be.null;
        });
    });
});
