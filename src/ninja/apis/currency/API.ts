import { buildURL, requestTransformed } from "../../../common/functions";
import { LanguageCode } from "../../shared/models";
import { History } from "./History";
import { CurrencyType } from "./models";
import { Response } from "./Response";

/**
 * @endpoint https://poe.ninja/api/data/CurrencyOverview
 * @param league
 * @param type
 * @param language
 */
export const get = async (
    league: string,
    type: CurrencyType,
    language: LanguageCode = "en"
): Promise<Response> => {
    const url = buildURL(`https://poe.ninja/api/data/CurrencyOverview`, null, null, {
        league,
        type,
        language,
    });
    return await requestTransformed(Response, url);
};

/**
 * @endpoint https://poe.ninja/api/data/CurrencyHistory
 * @param league
 * @param type
 * @param itemId
 */
export const getHistory = async (
    league: string,
    type: CurrencyType,
    currencyId: string
): Promise<History> => {
    const url = buildURL(`https://poe.ninja/api/data/CurrencyHistory`, null, null, {
        league,
        type,
        currencyId,
    });

    return await requestTransformed(History, url);
};
