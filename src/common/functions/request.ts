/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { AxiosError, AxiosInstance, AxiosResponse, Method } from "axios";
import { plainToClass } from "class-transformer";
import { Settings } from "../../poe";

import { APIError, ExternalAPIError } from "../../poe/errors";
import { ResponseError } from "../errors";

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
        const status = error.response.status;
        const statusText = error.response.statusText;

        if ((<string>error.response.request.host).includes("pathofexile.com")) {
            const data = <ExternalAPIError>error.response.data;
            return Promise.reject(new APIError(data.error.message, status, data.error.code));
        }

        return Promise.reject(new ResponseError(statusText, status));
    }

    return Promise.reject(error);
};

const axiosInstance: AxiosInstance = axios.create({
    responseType: "json",
});

axiosInstance.interceptors.response.use(onResponse, onResponseError);

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

export const requestTransformed = async <T>(
    cls: new () => T,
    url: URL,
    method?: Method,
    payload?: unknown
): Promise<T | T[]> => {
    const response = await axiosInstance.request({
        url: url.toString(),
        method: method || "get",
        headers: buildHeaders(url),
        data: payload || {},
    });

    return plainToClass(cls, response.data);
};
