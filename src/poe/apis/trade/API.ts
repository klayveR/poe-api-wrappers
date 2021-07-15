import { buildURL, requestTransformed } from "../../../common/functions";
import * as Fetch from "./fetch";
import * as Ignore from "./ignore";
import * as Items from "./items";
import * as Leagues from "./leagues";
import * as Search from "./search";
import * as Static from "./static";
import * as Stats from "./stats";

/**
 * @endpoint https://www.pathofexile.com/api/trade/data/leagues
 * @throws [[APIError]]
 */
export const getLeagues = async (): Promise<Leagues.League[]> => {
    const url = new URL(`https://www.pathofexile.com/api/trade/data/leagues`);
    const response = await requestTransformed(Leagues.Response, url);
    return response.result;
};

/**
 * @endpoint https://www.pathofexile.com/api/trade/data/items
 * @throws [[APIError]]
 */
export const getItems = async (): Promise<Items.Group[]> => {
    const url = new URL(`https://www.pathofexile.com/api/trade/data/items`);
    const response = await requestTransformed(Items.Response, url);
    return response.result;
};

/**
 * @endpoint https://www.pathofexile.com/api/trade/data/stats
 * @throws [[APIError]]
 */
export const getStats = async (): Promise<Stats.Group[]> => {
    const url = new URL(`https://www.pathofexile.com/api/trade/data/stats`);
    const response = await requestTransformed(Stats.Response, url);
    return response.result;
};

/**
 * @endpoint https://www.pathofexile.com/api/trade/data/static
 * @throws [[APIError]]
 */
export const getStatic = async (): Promise<Static.Group[]> => {
    const url = new URL(`https://www.pathofexile.com/api/trade/data/static`);
    const response = await requestTransformed(Static.Response, url);
    return response.result;
};

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/trade/ignore
 * @param page Between `1` and `10`, will default to `1` if out of range
 * @returns A list of up to 50 ignored accounts
 * @throws [[APIError]]
 */
export const getIgnoredAccounts = async (page = 1): Promise<Ignore.Collection> => {
    const url = buildURL(`https://www.pathofexile.com/api/trade/ignore`, null, null, {
        page: page.toString(),
    });
    return await requestTransformed(Ignore.Collection, url);
};

/**
 * @throws [[APIError]]
 */
const getSearchResult = async (
    league: string,
    endpoint: string,
    query: Search.QueryContainer
): Promise<Search.Result> => {
    const url = new URL(`https://www.pathofexile.com/api/trade/${endpoint}/${league}`);

    const result = await requestTransformed(Search.Result, url, "post", query);

    return result;
};

/**
 * Execute a search query
 *
 * @endpoint https://www.pathofexile.com/api/trade/search/league
 * @param league
 * @param query
 * @throws [[APIError]]
 */
export const search = async (
    league: string,
    query: Search.SearchQueryContainer
): Promise<Search.Result> => {
    return await getSearchResult(league, "search", query);
};

/**
 * Execute an exchange query
 *
 * @endpoint https://www.pathofexile.com/api/trade/exchange/league
 * @param league
 * @param query
 * @throws [[APIError]]
 */
export const exchange = async (
    league: string,
    query: Search.ExchangeQueryContainer
): Promise<Search.Result> => {
    return await getSearchResult(league, "exchange", query);
};

/**
 * @endpoint https://www.pathofexile.com/api/trade/fetch
 * @param hashes
 * @throws [[APIError]]
 */
export const getFromHashes = async (hashes: string[]): Promise<Fetch.Result[]> => {
    const hashString = hashes.join(",");
    const url = new URL(`https://www.pathofexile.com/api/trade/fetch/${hashString}`);
    const response = await requestTransformed(Fetch.Response, url);
    return response.result;
};
