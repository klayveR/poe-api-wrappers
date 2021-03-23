import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - Characters", function () {
    this.timeout(10000);

    it("#get(account) - should return list of characters of account", async () => {
        await expect(API.get("Mathil")).to.be.fulfilled;
    });

    it("#getItems(account, character) - should return character items", async () => {
        await expect(API.getItems("Mathil", "Mathil")).to.be.fulfilled;
    });

    it("#getPassiveSkills(account, character) - should return character passive skill tree", async () => {
        await expect(API.getPassiveSkills("Mathil", "Mathil")).to.be.fulfilled;
    });
});
