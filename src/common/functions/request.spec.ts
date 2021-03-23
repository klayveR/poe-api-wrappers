import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { stripByteOrderMark } from "./request";

describe("Common - Functions", function () {
    describe("#stripByteOrderMark()", function () {
        it("should strip UTF-8 BOM", () => {
            const str = stripByteOrderMark("\ufeffsomething");
            expect(str.charCodeAt(0)).to.not.equal(0xfeff);
        });

        it("should not strip anything", () => {
            const str = stripByteOrderMark("valid string");
            expect(str.charAt(0)).to.equal("v");
        });
    });
});
