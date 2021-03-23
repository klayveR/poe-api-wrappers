import { buildURL } from "../../../common/functions";
import { requestTransformed, requestTransformedArray } from "../../functions";
import { RealmOptions } from "../../shared/models";
import { Character } from "./Character";
import { Items } from "./Items";
import { PassiveSkills } from "./PassiveSkills";

/**
 * @endpoint https://api.pathofexile.com/character-window/get-characters
 * @param accountName
 * @param sessionId Necessary if profile or character tab is private
 * @param options
 * @returns A list of characters of an account
 * @throws [[APIError]]
 */
export const get = async (
    accountName: string,
    sessionId?: string,
    options?: RealmOptions
): Promise<Character[]> => {
    const url = buildURL(
        `https://api.pathofexile.com/character-window/get-characters`,
        options,
        null,
        { accountName }
    );

    return await requestTransformedArray(Character, url, sessionId);
};

/**
 * @endpoint https://api.pathofexile.com/character-window/get-items
 * @param accountName
 * @param character
 * @param sessionId Necessary if profile or character tab is private
 * @param options
 * @throws [[APIError]]
 */
export const getItems = async (
    accountName: string,
    character: string,
    sessionId?: string,
    options?: RealmOptions
): Promise<Items> => {
    const url = buildURL(`https://api.pathofexile.com/character-window/get-items`, options, null, {
        accountName,
        character,
    });

    return await requestTransformed(Items, url, sessionId);
};

/**
 * @endpoint https://api.pathofexile.com/character-window/get-passive-skills
 * @param accountName
 * @param character
 * @param sessionId Necessary if profile or character tab is private
 * @param options
 * @throws [[APIError]]
 */
export const getPassiveSkills = async (
    accountName: string,
    character: string,
    sessionId?: string,
    options?: RealmOptions
): Promise<PassiveSkills> => {
    const url = buildURL(
        `https://api.pathofexile.com/character-window/get-passive-skills`,
        options,
        null,
        { accountName, character }
    );

    return await requestTransformed(PassiveSkills, url, sessionId);
};
