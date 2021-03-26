import { buildURL, requestTransformed } from "../../../common/functions";
import { PlayerHistoryOptions, SeasonOptions } from "./models";
import { PlayerHistory } from "./PlayerHistory";
import { Season } from "./Season";

/**
 * @endpoint https://api.pathofexile.com/seasons
 * @param options
 * @returns A list of all seasons
 * @throws [[APIError]]
 */
export const get = async (options?: SeasonOptions): Promise<Season[]> => {
    const url = buildURL(`https://api.pathofexile.com/seasons`, options);
    return <Season[]>await requestTransformed(Season, url);
};

/**
 * @remarks
 * This data is available even if the profile of the account is set to private
 *
 * @endpoint https://api.pathofexile.com/season-player-history
 * @param seasonId
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
export const getPlayerHistory = async (
    seasonId: string,
    accountName: string,
    options?: PlayerHistoryOptions
): Promise<PlayerHistory> => {
    const url = buildURL(`https://api.pathofexile.com/season-player-history`, options, null, {
        seasonId,
        id: accountName,
    });
    return <PlayerHistory>await requestTransformed(PlayerHistory, url);
};
