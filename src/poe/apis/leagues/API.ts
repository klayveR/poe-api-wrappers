import { buildURL, requestTransformed } from "../../../common/functions";
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
 * @endpoint https://www.pathofexile.com/api/leagues
 * @param options
 * @throws [[APIError]]
 */
export const get = async (options?: ListOptions): Promise<League[]> => {
    const url = buildURL(`https://www.pathofexile.com/api/leagues`, options);
    return <League[]>await requestTransformed(League, url);
};

/**
 * @example
 * Get the data from the Metamorph league, including the first 100 entries of the ladder.
 *
 * ```typescript
 * const data = await PathOfExile.Leagues.getById("Metamorph", { ladder: 1, limit: 100 });
 * ```
 *
 * @endpoint https://www.pathofexile.com/api/leagues/id
 * @param id
 * @param options
 * @throws [[APIError]]
 */
export const getById = async (id: string, options?: LeagueOptions): Promise<League> => {
    const url = buildURL(`https://www.pathofexile.com/api/leagues/${id}`, options);
    return <League>await requestTransformed(League, url);
};

/**
 * @endpoint https://www.pathofexile.com/api/league-rules
 * @throws [[APIError]]
 */
export const getRules = async (): Promise<Rule[]> => {
    const url = buildURL(`https://www.pathofexile.com/api/league-rules`);
    return <Rule[]>await requestTransformed(Rule, url);
};

/**
 * @endpoint https://www.pathofexile.com/api/league-rules/id
 * @param id
 * @throws [[APIError]]
 */
export const getRuleById = async (id: string): Promise<Rule> => {
    const url = buildURL(`https://www.pathofexile.com/api/league-rules/${id}`);
    return <Rule>await requestTransformed(Rule, url);
};
