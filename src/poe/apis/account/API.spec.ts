import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import { APIError } from "../../errors";
import * as API from "./API";
import { Settings } from "../../Settings";

describe("Path of Exile - Accounts", function () {
    this.timeout(10000);

    describe("#getProfile()", function () {
        it("should return account profile", async () => {
            await expect(API.getProfile()).to.be.fulfilled;
        });

        it("should throw APIError if invalid session id is supplied", async () => {
            Settings.sessionId = "invalid";
            await expect(API.getProfile()).to.be.rejectedWith(APIError);
        });

        after(() => {
            Settings.sessionId = process.env["POESESSID"] as string;
        });
    });

    it("#getAvatars() - should return account avatars", async () => {
        await expect(API.getAvatars()).to.be.fulfilled;
    });

    it("#getAvatars(options) - should return account avatars with options", async () => {
        await expect(API.getAvatars({ page: 2 })).to.be.fulfilled;
    });

    it("#getNameByCharacter(character) - should return account name", async () => {
        await expect(API.getNameByCharacter("klayCA")).to.be.fulfilled;
    });

    it("#getStash(account, league, tab) - should return stash tab items", async () => {
        await expect(API.getStash("klayveR", "Standard", 0, { tabs: 1 })).to.be.fulfilled;
    });

    it("#getShowcasePins(account) - should return showcase pins", async () => {
        await expect(API.getShowcasePins("Chris")).to.be.fulfilled;
    });

    it("#getMicrotransactions(account) - should return mtx owned by account", async () => {
        await expect(API.getMicrotransactions("klayveR")).to.be.fulfilled;
    });
});
