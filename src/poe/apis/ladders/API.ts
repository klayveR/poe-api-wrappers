import { buildURL, requestTransformed } from "../../../common/functions";
import { Ladder } from "./Ladder";
import { Options } from "./models";

/**
 * @remarks
 * There is a restriction in place on the last ladder entry you are able to retrieve which is set to `15000`.
 *
 * @example
 * Get the first 200 characters in the SSF Standard ladder. We also set `track: 1` to add a unique identifier to each character.
 *
 * ```typescript
 * const ladder = await PathOfExile.Ladders.get("SSF Standard", { limit: 200, track: 1 });
 * ```
 *
 * @endpoint https://www.pathofexile.com/api/ladders/id
 * @param id
 * @param options
 * @throws [[APIError]]
 */
export const get = async (id: string, options?: Options): Promise<Ladder> => {
    const url = buildURL(`https://www.pathofexile.com/api/ladders/${id}`, options);
    const ladder = <Ladder>await requestTransformed(Ladder, url);
    ladder.leagueId = id;

    if (options) {
        ladder.options = options;
    }

    return ladder;
};
