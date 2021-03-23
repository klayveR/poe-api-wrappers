import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { Account } from "./";

describe("Path of Exile - Accounts - Account", function () {
    this.timeout(30000);

    it("#getCharacters() - should return list of account characters", async () => {
        const account = new Account();
        account.name = "klayveR";

        await expect(account.getCharacters()).to.be.fulfilled;
    });
});
