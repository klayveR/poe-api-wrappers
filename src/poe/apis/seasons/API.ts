import { Settings } from "../../Settings";
import { buildURL, requestTransformed, requestTransformedArray } from "../../../common/functions";
import { PlayerHistoryOptions } from "./models";
import { PlayerHistory } from "./PlayerHistory";
import { Season } from "./Season";

/**
 * @endpoint https://api.pathofexile.com/seasons
 * @returns A list of all seasons
 * @throws [[APIError]]
 */
export const get = async (): Promise<Season[]> => {
    const url = new URL(`https://api.pathofexile.com/seasons`);
    return await requestTransformedArray(Season, url, { userAgent: Settings.userAgent });
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
    return await requestTransformed(PlayerHistory, url, { userAgent: Settings.userAgent });
};
