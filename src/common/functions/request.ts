import axios, { AxiosRequestConfig, Method } from "axios";
import { plainToClass } from "class-transformer";

import { APIError, ExternalAPIError } from "../../poe/errors";
import { RequestOptions } from "../models";

export const request = async (
    url: URL,
    reqSettings: RequestOptions = {},
    method: Method = "get",
    payload: unknown = {}
): Promise<string> => {
    try {
        const config: AxiosRequestConfig = {
            url: url.toString(),
            method: method,
            headers: buildHeaders(reqSettings),
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
            if (url.host === "pathofexile.com" || url.host === "api.pathofexile.com") {
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
    reqSettings: RequestOptions = {},
    method: Method = "get",
    payload: unknown = {}
): Promise<T> => {
    const response = await request(url, reqSettings, method, payload);
    const obj = <T>JSON.parse(response);

    return plainToClass(cls, obj);
};

export const requestTransformedArray = async <T>(
    cls: new () => T,
    url: URL,
    reqSettings: RequestOptions = {},
    method: Method = "get",
    payload: unknown = {}
): Promise<T[]> => {
    const response = await request(url, reqSettings, method, payload);
    const obj = <T[]>JSON.parse(response);

    return plainToClass(cls, obj);
};

export const buildHeaders = (reqSettings: RequestOptions): Record<string, string> => {
    const headers: Record<string, string> = {};

    if (reqSettings.sessionId != null) {
        headers["Cookie"] = `POESESSID=${reqSettings.sessionId}`;
    }

    if (reqSettings.userAgent != null) {
        headers["User-Agent"] = reqSettings.userAgent;
    }

    return headers;
};

export const stripByteOrderMark = (str: string): string => {
    if (str.charCodeAt(0) === 0xfeff) {
        str = str.slice(1);
    }

    return str;
};
