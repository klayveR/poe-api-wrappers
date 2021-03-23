import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Account", function () {
    this.timeout(10000);

    let sessionId: string;

    before(() => {
        sessionId = process.env["POESESSID"] as string;
    });

    /**
     * API Methods
     */
    it("#getProfile(session) - should return account profile", async () => {
        await expect(API.getProfile(sessionId)).to.be.fulfilled;
    });

    it("#getAvatars(session) - should return account avatars", async () => {
        await expect(API.getAvatars(sessionId)).to.be.fulfilled;
    });

    it("#getNameByCharacter(character) - should return account name", async () => {
        await expect(API.getNameByCharacter("klayCA")).to.be.fulfilled;
    });

    it("#getStash(account, league, tab, session) - should return stash tab items", async () => {
        await expect(API.getStash("klayveR", "Standard", 0, sessionId, { tabs: 1 })).to.be
            .fulfilled;
    });

    it("#getShowcasePins(account) - should return showcase pins", async () => {
        await expect(API.getShowcasePins("Chris")).to.be.fulfilled;
    });

    it("#getMicrotransactions(account, session) - should return mtx owned by account", async () => {
        await expect(API.getMicrotransactions("klayveR", sessionId)).to.be.fulfilled;
    });
});
