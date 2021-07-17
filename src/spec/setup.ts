import "reflect-metadata";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import * as PathOfExile from "../poe";

export function mochaGlobalSetup(): void {
    chai.use(chaiAsPromised);
    PathOfExile.Settings.setUserAgent(
        "@klayver/poe-api-wrappers",
        process.env.npm_package_version,
        "contact@klayver.de"
    );
    PathOfExile.Settings.sessionId = process.env["POESESSID"] as string;
}
