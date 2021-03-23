import axios, { Method } from "axios";
import { plainToClass } from "class-transformer";

import { request } from "../../common/functions";
import { APIError } from "../errors/APIError";
import { ExternalAPIError } from "../errors/models";
import { Settings } from "../Settings";
import { buildHeaders } from "./buildHeaders";

export const requestWithError = async (
    url: URL,
    headers: Record<string, string> = {},
    method: Method = "get",
    payload: unknown = {}
): Promise<string> => {
    try {
        return await request(url, headers, method, payload);
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            const data = <ExternalAPIError>JSON.parse(error.response.data);
            throw new APIError(data);
        }

        throw error;
    }
};

export const requestTransformed = async <T>(
    cls: new () => T,
    url: URL,
    sessionId?: string,
    method: Method = "get",
    payload: unknown = {}
): Promise<T> => {
    const headers = buildHeaders(sessionId, Settings.userAgent);
    const response = await requestWithError(url, headers, method, payload);
    const obj = <T>JSON.parse(response);

    return plainToClass(cls, obj);
};

export const requestTransformedArray = async <T>(
    cls: new () => T,
    url: URL,
    sessionId?: string,
    method: Method = "get",
    payload: unknown = {}
): Promise<T[]> => {
    const headers = buildHeaders(sessionId, Settings.userAgent);
    const response = await requestWithError(url, headers, method, payload);
    const obj = <T[]>JSON.parse(response);

    return plainToClass(cls, obj);
};
