import { Settings } from "../../Settings";
import { buildURL, requestTransformedArray } from "../../../common/functions";
import { Match } from "./Match";
import { MatchOptions } from "./models";

/**
 * @endpoint https://api.pathofexile.com/pvp-matches
 * @param options
 * @throws [[APIError]]
 */
export const getMatches = async (options?: MatchOptions): Promise<Match[]> => {
    const url = buildURL(`https://api.pathofexile.com/pvp-matches`, options);
    return await requestTransformedArray(Match, url, { userAgent: Settings.userAgent });
};
