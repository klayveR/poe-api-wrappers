import "reflect-metadata";
import "mocha";

import { expect } from "chai";
import { plainToClass } from "class-transformer";

import CachedTwitchStreams from "../../resource/twitch_streams.json";
import * as API from "./API";
import { Response } from "./Response";

describe("Path of Exile - Streams", function () {
    this.timeout(10000);

    /**
     * API Methods
     */
    it("#get() - should return list twitch streams", async () => {
        await expect(API.get()).to.be.fulfilled;
    });

    /**
     * Class Methods
     */
    describe("Class - TwitchStream", () => {
        let response: Response;

        before(() => {
            response = plainToClass(Response, CachedTwitchStreams);
        });

        it("#url - should return profile url", () => {
            expect(response.streams[0].url).to.equal("https://twitch.tv/zizaran");
            expect(response.streams[1].url).to.equal("https://twitch.tv/raizqt");
        });
    });
});
