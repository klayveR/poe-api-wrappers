import axios, { AxiosRequestConfig, Method } from "axios";
import { plainToClass } from "class-transformer";
import { Settings } from "../../poe";

import { APIError, ExternalAPIError } from "../../poe/errors";

export const request = async (
    url: URL,
    method: Method = "get",
    payload: unknown = {}
): Promise<string> => {
    try {
        const config: AxiosRequestConfig = {
            url: url.toString(),
            method: method,
            headers: buildHeaders(url),
            data: payload,
            transformResponse: [
                (data: string): string => {
                    return data;
                },
            ],
        };

        const response = await axios(config);
        const data = <string>response.data;

        return stripByteOrderMark(data);
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            if (url.host.includes("pathofexile.com")) {
                const data = <ExternalAPIError>JSON.parse(error.response.data);
                throw new APIError(data);
            }
        }

        throw error;
    }
};

export const requestTransformed = async <T>(
    cls: new () => T,
    url: URL,
    method: Method = "get",
    payload: unknown = {}
): Promise<T> => {
    const response = await request(url, method, payload);
    const obj = <T>JSON.parse(response);

    return plainToClass(cls, obj);
};

export const requestTransformedArray = async <T>(
    cls: new () => T,
    url: URL,
    method: Method = "get",
    payload: unknown = {}
): Promise<T[]> => {
    const response = await request(url, method, payload);
    const obj = <T[]>JSON.parse(response);

    return plainToClass(cls, obj);
};

export const buildHeaders = (url: URL): Record<string, string> => {
    const headers: Record<string, string> = {};

    if (url.host.includes("pathofexile.com")) {
        if (Settings.sessionId != null) {
            headers["Cookie"] = `POESESSID=${Settings.sessionId}`;
        }

        if (Settings.userAgent != null) {
            headers["User-Agent"] = Settings.userAgent;
        }
    }

    return headers;
};

export const stripByteOrderMark = (str: string): string => {
    if (str.charCodeAt(0) === 0xfeff) {
        str = str.slice(1);
    }

    return str;
};
