import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { stripBOM } from "./stripBOM";

describe("Common - Functions - #stripBOM()", function () {
    it("should strip UTF-8 BOM", () => {
        const str = stripBOM("\ufeffsomething");
        expect(str.charCodeAt(0)).to.not.equal(0xfeff);
    });

    it("should not strip anything", () => {
        const str = stripBOM("valid string");
        expect(str.charAt(0)).to.equal("v");
    });
});
