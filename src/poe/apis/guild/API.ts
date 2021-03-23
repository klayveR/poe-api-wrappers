import { buildURL } from "../../../common/functions";
import { requestTransformed } from "../../functions";
import { Guild } from "./Guild";
import { StashHistoryOptions } from "./models";
import { PointTransactions } from "./PointTransactions";
import { StashHistory } from "./StashHistory";

/**
 * @endpoint https://api.pathofexile.com/guild
 * @param sessionId
 * @returns Guild data of the account the session ID belongs to
 * @throws [[APIError]]
 */
export const get = async (sessionId: string): Promise<Guild> => {
    const url = new URL(`https://api.pathofexile.com/guild`);
    return await requestTransformed(Guild, url, sessionId);
};

/**
 * @endpoint https://api.pathofexile.com/guild/id/stash/history
 * @param sessionId
 * @param guildId Guild ID
 * @param options
 * @throws [[APIError]]
 */
export const getStashHistory = async (
    guildId: string,
    sessionId: string,
    options?: StashHistoryOptions
): Promise<StashHistory> => {
    const url = buildURL(`https://api.pathofexile.com/guild/${guildId}/stash/history`, options);
    return await requestTransformed(StashHistory, url, sessionId);
};

/**
 * @endpoint https://api.pathofexile.com/guild/point-transactions
 * @param sessionId
 * @param options
 * @returns Point transactions for the guild the session ID belongs to
 * @throws [[APIError]]
 */
export const getPointTransactions = async (
    sessionId: string,
    options?: StashHistoryOptions
): Promise<PointTransactions> => {
    const url = buildURL(`https://api.pathofexile.com/guild/point-transactions`, options);
    return await requestTransformed(PointTransactions, url, sessionId);
};

/**
 * @endpoint https://api.pathofexile.com/account/guild/point-transactions
 * @param sessionId
 * @param options
 * @returns Point transactions the account the session ID belongs to has made to guilds
 * @throws [[APIError]]
 */
export const getAccountPointTransactions = async (
    sessionId: string,
    options?: StashHistoryOptions
): Promise<PointTransactions> => {
    const url = buildURL(`https://api.pathofexile.com/account/guild/point-transactions`, options);
    return await requestTransformed(PointTransactions, url, sessionId);
};
