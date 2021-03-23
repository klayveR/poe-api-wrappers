import { buildURL, requestTransformed } from "../../../common/functions";
import { Settings } from "../../Settings";
import { Collection } from "./Collection";
import { MembersOptions } from "./models";

/**
 * @remarks
 * The account tied to the provided session id must be part of the private league.
 *
 * @endpoint https://api.pathofexile.com/private-league-member/id
 * @param id ID of the private league without `PL` prefix
 * @param sessionId
 * @param options
 * @throws [[APIException]]
 */
export const getMembers = async (
    id: number,
    sessionId: string,
    options?: MembersOptions
): Promise<Collection> => {
    const url = buildURL(
        `https://api.pathofexile.com/private-league-member/${id.toString()}`,
        options
    );
    return await requestTransformed(Collection, url, { sessionId, userAgent: Settings.userAgent });
};
