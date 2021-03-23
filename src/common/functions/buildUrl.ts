import { URL } from "url";

interface Parameters {
    [key: string]: string;
}

export function buildURL<T>(
    url: string,
    optionalParameters?: T,
    defaults?: T,
    additionalParameters?: Parameters
): URL {
    const urlObj: URL = new URL(url);

    if (optionalParameters && defaults) {
        for (const key in defaults) {
            if (optionalParameters[key] == null) {
                optionalParameters[key] = defaults[key];
            }
        }
    }

    if (optionalParameters == null && defaults) {
        optionalParameters = defaults;
    }

    if (optionalParameters != null) {
        for (const [key, value] of Object.entries(optionalParameters)) {
            if (value != null) {
                urlObj.searchParams.append(key, value);
            }
        }
    }

    if (additionalParameters) {
        for (const key in additionalParameters) {
            urlObj.searchParams.append(key, additionalParameters[key]);
        }
    }

    return urlObj;
}
