import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import { Member } from "./";

describe("Path of Exile - Private Leagues - Member", function () {
    this.timeout(30000);

    it("#getCharacters() - should return list of member characters", async () => {
        const member = new Member();
        member.memberName = "klayveR";

        await expect(member.getCharacters()).to.be.fulfilled;
    });
});
