import { Settings } from "../../Settings";
import { buildURL, requestTransformed } from "../../../common/functions";
import * as Avatars from "./avatars";
import { AvatarsOptions, ShowcasePinOptions, StashOptions } from "./models";
import * as MTX from "./mtx";
import { Name } from "./Name";
import { Profile } from "./profile";
import * as ShowcasePins from "./showcase-pins";
import { Stash } from "./stash";

/**
 * @endpoint https://api.pathofexile.com/profile
 * @param sessionId
 * @throws [[APIError]]
 */
export const getProfile = async (sessionId: string): Promise<Profile> => {
    const url = new URL(`https://api.pathofexile.com/profile`);

    return await requestTransformed(Profile, url, { sessionId, userAgent: Settings.userAgent });
};

/**
 * @endpoint https://api.pathofexile.com/account-avatar
 * @param sessionId
 * @param options
 * @throws [[APIError]]
 */
export const getAvatars = async (
    sessionId: string,
    options?: AvatarsOptions
): Promise<Avatars.Collection> => {
    const url = buildURL(`https://api.pathofexile.com/account-avatar`, options, {
        page: 1,
        perPage: 16,
        custom: false,
    });

    return await requestTransformed(Avatars.Collection, url, {
        sessionId,
        userAgent: Settings.userAgent,
    });
};

/**
 * @remarks
 * This data is available even if the profile of the account is set to private
 *
 * @endpoint https://api.pathofexile.com/account/showcase-pins
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
export const getShowcasePins = async (
    accountName: string,
    options?: ShowcasePinOptions
): Promise<ShowcasePins.Collection> => {
    const url = buildURL(`https://api.pathofexile.com/account/showcase-pins`, options, null, {
        account: accountName,
    });

    return await requestTransformed(ShowcasePins.Collection, url, {
        userAgent: Settings.userAgent,
    });
};

/**
 * @endpoint https://api.pathofexile.com/character-window/get-stash-items
 * @param accountName
 * @param league
 * @param tabIndex
 * @param sessionId
 * @param options
 * @throws [[APIError]]
 */
export const getStash = async (
    accountName: string,
    league: string,
    tabIndex: number,
    sessionId?: string,
    options?: StashOptions
): Promise<Stash> => {
    const url = buildURL(
        `https://api.pathofexile.com/character-window/get-stash-items`,
        options,
        null,
        { accountName, league, tabIndex: tabIndex.toString() }
    );

    return await requestTransformed(Stash, url, { sessionId, userAgent: Settings.userAgent });
};

/**
 * @endpoint https://api.pathofexile.com/character-window/get-account-name-by-character
 * @param characterName
 * @throws [[APIError]]
 */
export const getNameByCharacter = async (characterName: string): Promise<string> => {
    const url = buildURL(
        `https://api.pathofexile.com/character-window/get-account-name-by-character`,
        null,
        null,
        { character: characterName }
    );

    const account = await requestTransformed(Name, url, { userAgent: Settings.userAgent });
    return account.name;
};

/**
 * @endpoint https://api.pathofexile.com/character-window/get-mtx-stash-items
 * @param accountName
 * @param sessionId
 * @param options
 * @throws [[APIError]]
 */
export const getMicrotransactions = async (
    accountName: string,
    sessionId: string,
    sortOrder: "category" | "theme" = "category"
): Promise<MTX.Group[]> => {
    const url = buildURL(`https://api.pathofexile.com/character-window/get-mtx-stash-items`);
    const payload = {
        accountName,
        sortOrder,
    };

    const response = await requestTransformed(
        MTX.Response,
        url,
        { sessionId, userAgent: Settings.userAgent },
        "post",
        payload
    );
    return response.groups;
};
