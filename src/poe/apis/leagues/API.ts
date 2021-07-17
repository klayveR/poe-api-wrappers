import { Settings } from "../../Settings";
import { RealmOptions } from "../../shared";

import { buildURL, requestTransformed } from "../../../common/functions";
import { League } from "./League";
import { LeagueContainer } from "./LeagueContainer";
import { LeaguesCollection } from "./LeaguesCollection";
import { Options } from "./models";
import { Rule } from "./Rule";

/**
 * Get a list of leagues matching options.
 *
 * @example
 * Get the list of the leagues that are currently active on the PlayStation realm.
 *
 * ```typescript
 * const data = await PathOfExile.Leagues.get({ type: "main", realm: "sony" });
 * ```
 *
 * @endpoint https://www.pathofexile.com/api/leagues
 * @endpoint https://api.pathofexile.com/league *(Authorized)*
 * @param options
 * @throws [[APIError]]
 */
export const get = async (options?: Options): Promise<League[]> => {
    if (Settings.accessToken != null || Settings.sessionId != null) {
        const url = buildURL(`https://api.pathofexile.com/league`, options);
        const collection = <LeaguesCollection>await requestTransformed(LeaguesCollection, url);
        return collection.leagues;
    }

    const url = buildURL(`https://www.pathofexile.com/api/leagues`, options);
    return <League[]>await requestTransformed(League, url);
};

/**
 * Get a league by ID.
 *
 * @example
 * Get the data from the Metamorph league.
 *
 * ```typescript
 * const data = await PathOfExile.Leagues.getById("Metamorph");
 * ```
 *
 * @endpoint https://www.pathofexile.com/api/leagues/id
 * @endpoint https://api.pathofexile.com/league/id *(Authorized)*
 * @param id
 * @param options
 * @throws [[APIError]]
 */
export const getById = async (id: string, options?: RealmOptions): Promise<League> => {
    if (Settings.accessToken != null || Settings.sessionId != null) {
        const url = buildURL(`https://api.pathofexile.com/league/${id}`, options);
        const container = <LeagueContainer>await requestTransformed(LeagueContainer, url);
        return container.league;
    }

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
