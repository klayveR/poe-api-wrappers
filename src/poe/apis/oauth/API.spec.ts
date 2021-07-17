import "reflect-metadata";
import "mocha";

import { expect } from "chai";

import * as API from "./API";

describe("Path of Exile - OAuth 2", function () {
    it("#generateAuthorizationURL() - should return authorization URL", () => {
        const url = API.generateAuthorizationURL("myapp", "verycoolhash", "example.com", [
            "account:profile",
        ]);

        expect(url.toString()).to.equal(
            `https://www.pathofexile.com/oauth/authorize?client_id=myapp&response_type=code&redirect_uri=example.com&scope=account%3Aprofile&state=verycoolhash&prompt=consent`
        );
    });
});
