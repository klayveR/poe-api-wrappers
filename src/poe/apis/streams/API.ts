import { requestTransformed } from "../../../common/functions";
import { Response } from "./Response";
import { Stream } from "./Stream";

/**
 * @endpoint https://www.pathofexile.com/api/streams
 * @returns A list of all streams displayed on the official Path of Exile home page
 * @throws [[APIError]]
 */
export const get = async (): Promise<Stream[]> => {
    const url = new URL(`https://pathofexile.com/api/streams`);
    const response = await requestTransformed(Response, url);
    return response.streams;
};
