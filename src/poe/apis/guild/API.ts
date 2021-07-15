import { buildURL, requestTransformed } from "../../../common/functions";
import { Guild } from "./Guild";
import { StashHistoryOptions } from "./models";
import { PointTransactions } from "./PointTransactions";
import { StashHistory } from "./StashHistory";

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild
 * @returns Guild data of the account the session ID belongs to
 * @throws [[APIError]]
 */
export const get = async (): Promise<Guild> => {
    const url = new URL(`https://www.pathofexile.com/api/guild`);
    return await requestTransformed(Guild, url);
};

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild/<id>/stash/history
 * @param guildId
 * @param options
 * @throws [[APIError]]
 */
export const getStashHistory = async (
    guildId: string,
    options?: StashHistoryOptions
): Promise<StashHistory> => {
    const url = buildURL(`https://www.pathofexile.com/api/guild/${guildId}/stash/history`, options);
    return await requestTransformed(StashHistory, url);
};

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/guild/point-transactions
 * @param options
 * @returns Point transactions for the guild the session ID belongs to
 * @throws [[APIError]]
 */
export const getPointTransactions = async (
    options?: StashHistoryOptions
): Promise<PointTransactions> => {
    const url = buildURL(`https://www.pathofexile.com/api/guild/point-transactions`, options);
    return await requestTransformed(PointTransactions, url);
};

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://www.pathofexile.com/api/account/guild/point-transactions
 * @param options
 * @returns Point transactions the account the session ID belongs to has made to guilds
 * @throws [[APIError]]
 */
export const getAccountPointTransactions = async (
    options?: StashHistoryOptions
): Promise<PointTransactions> => {
    const url = buildURL(
        `https://www.pathofexile.com/api/account/guild/point-transactions`,
        options
    );
    return await requestTransformed(PointTransactions, url);
};
