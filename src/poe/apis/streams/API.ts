import { requestTransformed } from "../../../common/functions";
import { Settings } from "../../Settings";
import { Response } from "./Response";
import { Stream } from "./Stream";

/**
 * @endpoint https://api.pathofexile.com/streams
 * @returns A list of all streams displayed on the official Path of Exile home page
 * @throws [[APIError]]
 */
export const get = async (): Promise<Stream[]> => {
    const url = new URL(`https://api.pathofexile.com/streams`);
    const response = await requestTransformed(Response, url, { userAgent: Settings.userAgent });
    return response.streams;
};
