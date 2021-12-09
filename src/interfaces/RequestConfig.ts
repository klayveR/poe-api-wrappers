import { Method } from "axios";

/**
 * @internal
 */
export type RequestConfig = {
    endpoint: string;
    method: Method;
    options?: object;
    payload?: unknown;
    headers?: Record<string, string>;
    customBaseUrl?: string;
};
