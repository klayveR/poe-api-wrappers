import { buildURL, requestTransformed } from "../../../common/functions";
import { LanguageCode } from "../../shared/models";
import { History } from "./History";
import { CurrencyType } from "./models";
import { Collection } from "./Collection";

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
): Promise<Collection> => {
    const url = buildURL(`https://poe.ninja/api/data/CurrencyOverview`, null, null, {
        league,
        type,
        language,
    });
    return await requestTransformed(Collection, url);
};

/**
 * @endpoint https://poe.ninja/api/data/CurrencyHistory
 * @param league
 * @param type
 * @param id
 */
export const getHistory = async (
    league: string,
    type: CurrencyType,
    id: number
): Promise<History> => {
    const url = buildURL(`https://poe.ninja/api/data/CurrencyHistory`, null, null, {
        league,
        type,
        currencyId: id.toString(),
    });

    return await requestTransformed(History, url);
};
