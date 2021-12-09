import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ClassConstructor, plainToInstance } from "class-transformer";

import { RequestConfig, Response } from "@/interfaces";
import { TransformableObject } from "@/TransformableObject";

/**
 * @internal
 */
export abstract class Wrapper {
    private axiosInstance: AxiosInstance;
    private _lastResponse?: Response;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    /**
     * The response of the latest successful request made with this wrapper
     */
    public get lastResponse(): Response | undefined {
        return this._lastResponse;
    }

    protected setHeader(key: string, value: string): void {
        this.axiosInstance.defaults.headers.common[key] = value;
    }

    protected removeHeader(key: string): void {
        if (key in this.axiosInstance.defaults.headers.common) {
            delete this.axiosInstance.defaults.headers.common[key];
        }
    }

    protected async request<T extends TransformableObject>(
        konstructor: ClassConstructor<T>,
        requestConfig: RequestConfig
    ): Promise<T> {
        const response = await this.makeRequest(requestConfig);

        if (Array.isArray(response.data)) {
            throw new Error("Response is an array, use requestArray instead");
        }

        return plainToInstance(konstructor, response.data);
    }

    protected async requestArray<T extends TransformableObject>(
        konstructor: ClassConstructor<T>,
        requestConfig: RequestConfig
    ): Promise<T[]> {
        const response = await this.makeRequest(requestConfig);

        if (!Array.isArray(response.data)) {
            throw new Error("Response is not an array, use request instead");
        }

        return plainToInstance(konstructor, response.data);
    }

    private async makeRequest(requestConfig: RequestConfig): Promise<AxiosResponse<unknown, unknown>> {
        const url = this.buildUrl(requestConfig.endpoint, requestConfig.options);
        const axiosConfig: AxiosRequestConfig = {
            url: url,
            method: requestConfig.method,
            headers: requestConfig.headers,
            data: requestConfig.payload,
        };

        if (requestConfig.customBaseUrl != null) {
            axiosConfig.baseURL = requestConfig.customBaseUrl;
        }

        const response = await this.axiosInstance.request(axiosConfig);
        this._lastResponse = {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
        };

        return response;
    }

    private buildUrl(endpoint: string, options?: object): string {
        if (options == null) {
            return endpoint;
        }

        const searchParams = new URLSearchParams();

        for (const [key, value] of Object.entries(options)) {
            searchParams.append(key, value as string);
        }

        return `${endpoint}?${searchParams.toString()}`;
    }
}
