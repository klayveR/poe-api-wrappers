import axios, { AxiosRequestConfig, Method } from "axios";
import { stripBOM } from "./stripBOM";

/**
 * @private
 */
export const request = async (
    url: URL,
    headers: Record<string, string> = {},
    method: Method = "get",
    payload: unknown = {}
): Promise<string> => {
    const config: AxiosRequestConfig = {
        url: url.toString(),
        method: method,
        headers: headers,
        data: payload,
        transformResponse: [
            (data: string): string => {
                return data;
            },
        ],
    };

    const response = await axios(config);
    const data = <string>response.data;

    return stripBOM(data);
};
