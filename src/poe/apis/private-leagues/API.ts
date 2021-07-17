import { buildURL, requestTransformed } from "../../../common/functions";
import { Collection } from "./Collection";
import { MembersOptions } from "./models";

/**
 * @remarks
 * Requires [[Settings.setAuthorization | Authorization]]
 *
 * @remarks
 * The account tied to the provided session id must be part of the private league.
 *
 * @endpoint https://www.pathofexile.com/api/private-league-member/id
 * @param id ID of the private league without `PL` prefix
 * @param options
 * @throws [[APIError]]
 */
export const getMembers = async (id: number, options?: MembersOptions): Promise<Collection> => {
    const url = buildURL(
        `https://www.pathofexile.com/api/private-league-member/${id.toString()}`,
        options
    );
    return <Collection>await requestTransformed(Collection, url);
};
