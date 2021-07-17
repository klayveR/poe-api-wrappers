import "reflect-metadata";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import * as PathOfExile from "../poe";

export function mochaGlobalSetup(): void {
    chai.use(chaiAsPromised);
    PathOfExile.Settings.userAgent = "klayveR/poe-api-wrappers";
    PathOfExile.Settings.sessionId = process.env["POESESSID"] as string;
}
