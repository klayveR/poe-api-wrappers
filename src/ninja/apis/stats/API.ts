import { requestTransformed } from "../../../common/functions";
import { Response } from "./Response";

/**
 * @endpoint https://poe.ninja/api/Data/GetStats
 */
export const get = async (): Promise<Response> => {
    const url = new URL(`https://poe.ninja/api/Data/GetStats`);
    return await requestTransformed(Response, url);
};
