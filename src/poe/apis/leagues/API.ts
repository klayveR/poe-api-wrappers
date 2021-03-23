import { Settings } from "../../Settings";
import { buildURL, requestTransformed, requestTransformedArray } from "../../../common/functions";
import { League } from "./League";
import { LeagueOptions, ListOptions } from "./models";
import { Rule } from "./Rule";

/**
 * @example
 * Get the list of the leagues that are currently active on the PlayStation realm.
 *
 * ```typescript
 * const data = await PathOfExile.Leagues.get({ type: "main", realm: "sony" });
 * ```
 *
 * @endpoint https://api.pathofexile.com/leagues
 * @param options
 * @throws [[APIError]]
 */
export const get = async (options?: ListOptions): Promise<League[]> => {
    const url = buildURL(`https://api.pathofexile.com/leagues`, options);
    return await requestTransformedArray(League, url, { userAgent: Settings.userAgent });
};

/**
 * @example
 * Get the data from the Metamorph league, including the first 100 entries of the ladder.
 *
 * ```typescript
 * const data = await PathOfExile.Leagues.getById("Metamorph", { ladder: 1, limit: 100 });
 * ```
 *
 * @endpoint https://api.pathofexile.com/leagues/id
 * @param id
 * @param options
 * @throws [[APIError]]
 */
export const getById = async (id: string, options?: LeagueOptions): Promise<League> => {
    const url = buildURL(`https://api.pathofexile.com/leagues/${id}`, options);
    return await requestTransformed(League, url, { userAgent: Settings.userAgent });
};

/**
 * @endpoint http://api.pathofexile.com/league-rules
 * @throws [[APIException]]
 */
export const getRules = async (): Promise<Rule[]> => {
    const url = buildURL(`http://api.pathofexile.com/league-rules`);
    return await requestTransformedArray(Rule, url, { userAgent: Settings.userAgent });
};

/**
 * @endpoint http://api.pathofexile.com/league-rules/id
 * @param id
 * @throws [[APIException]]
 */
export const getRuleById = async (id: string): Promise<Rule> => {
    const url = buildURL(`http://api.pathofexile.com/league-rules/${id}`);
    return await requestTransformed(Rule, url, { userAgent: Settings.userAgent });
};
