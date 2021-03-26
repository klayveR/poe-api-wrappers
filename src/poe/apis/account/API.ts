import { buildURL, requestTransformed } from "../../../common/functions";
import * as Avatars from "./avatars";
import { AvatarsOptions, ShowcasePinOptions, StashOptions } from "./models";
import * as MTX from "./mtx";
import { Name } from "./Name";
import { Profile } from "./profile";
import * as ShowcasePins from "./showcase-pins";
import { Stash } from "./stash";

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://api.pathofexile.com/profile
 * @throws [[APIError]]
 */
export const getProfile = async (): Promise<Profile> => {
    const url = new URL(`https://api.pathofexile.com/profile`);

    return <Profile>await requestTransformed(Profile, url);
};

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://api.pathofexile.com/account-avatar
 * @param options
 * @throws [[APIError]]
 */
export const getAvatars = async (options?: AvatarsOptions): Promise<Avatars.Collection> => {
    const url = buildURL(`https://api.pathofexile.com/account-avatar`, options, {
        page: 1,
        perPage: 16,
        custom: false,
    });

    const collection = <Avatars.Collection>await requestTransformed(Avatars.Collection, url);

    if (options) {
        collection.options = options;
    }

    return collection;
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

    return <ShowcasePins.Collection>await requestTransformed(ShowcasePins.Collection, url);
};

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://api.pathofexile.com/character-window/get-stash-items
 * @param accountName
 * @param league
 * @param tabIndex
 * @param options
 * @throws [[APIError]]
 */
export const getStash = async (
    accountName: string,
    league: string,
    tabIndex: number,
    options?: StashOptions
): Promise<Stash> => {
    const url = buildURL(
        `https://api.pathofexile.com/character-window/get-stash-items`,
        options,
        null,
        { accountName, league, tabIndex: tabIndex.toString() }
    );

    return <Stash>await requestTransformed(Stash, url);
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

    const account = <Name>await requestTransformed(Name, url);
    return account.name;
};

/**
 * @remarks
 * Requires [[Settings.sessionId]] to be set.
 *
 * @endpoint https://api.pathofexile.com/character-window/get-mtx-stash-items
 * @param accountName
 * @param options
 * @throws [[APIError]]
 */
export const getMicrotransactions = async (
    accountName: string,
    sortOrder: "category" | "theme" = "category"
): Promise<MTX.Group[]> => {
    const url = buildURL(`https://api.pathofexile.com/character-window/get-mtx-stash-items`);
    const payload = {
        accountName,
        sortOrder,
    };

    const response = <MTX.Response>await requestTransformed(MTX.Response, url, "post", payload);
    return response.groups;
};
