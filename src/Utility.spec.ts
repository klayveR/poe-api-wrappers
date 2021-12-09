import { expect } from "chai";
import { Utility } from "./Utility";

describe("Utility", function () {
    it("#applyDefaults(options, defaults) - should apply defaults to an object", async () => {
        const options = {
            foo: "not bar",
        };

        const defaults = {
            foo: "bar",
            bar: "baz",
        };

        const result = Utility.applyDefaults(options, defaults);

        expect(result).to.deep.equal({ foo: "not bar", bar: "baz" });
    });
});
