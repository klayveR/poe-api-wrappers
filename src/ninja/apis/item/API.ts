import { buildURL, requestTransformed } from "../../../common/functions";
import { LanguageCode } from "../../shared/models";
import { ItemType } from "./models";
import { Response } from "./Response";

/**
 * @endpoint https://poe.ninja/api/data/ItemOverview
 * @param league
 * @param type
 * @param language
 */
export const get = async (
    league: string,
    type: ItemType,
    language: LanguageCode = "en"
): Promise<Response> => {
    const url = buildURL(`https://poe.ninja/api/data/ItemOverview`, null, null, {
        league,
        type,
        language,
    });
    return await requestTransformed(Response, url);
};
