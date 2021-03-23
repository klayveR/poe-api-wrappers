import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { plainToClass } from "class-transformer";

import CachedTwitchStreams from "../../resource/twitch_streams.json";
import { Response } from "./Response";

describe("Path of Exile - Streams - Stream", function () {
    let response: Response;

    before(() => {
        response = plainToClass(Response, CachedTwitchStreams);
    });

    it("#url - should return profile url", () => {
        expect(response.streams[0].url).to.equal("https://twitch.tv/zizaran");
        expect(response.streams[1].url).to.equal("https://twitch.tv/raizqt");
    });
});
