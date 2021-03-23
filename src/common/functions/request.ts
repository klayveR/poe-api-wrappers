import axios, { AxiosRequestConfig, Method } from "axios";

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
    let data = <string>response.data;

    // Strip UTF8 BOM
    if (data.charCodeAt(0) === 0xfeff) {
        data = data.slice(1);
    }

    return data;
};
