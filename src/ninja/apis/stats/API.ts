import { requestTransformed } from "../../../common/functions";
import { Stats } from "./Stats";

/**
 * @endpoint https://poe.ninja/api/Data/GetStats
 */
export const get = async (): Promise<Stats> => {
    const url = new URL(`https://poe.ninja/api/Data/GetStats`);
    return await requestTransformed(Stats, url);
};
