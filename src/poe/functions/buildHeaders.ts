export const buildHeaders = (sessionId?: string, userAgent?: string): Record<string, string> => {
    const headers: Record<string, string> = {};

    if (sessionId != null) {
        headers.Cookie = `POESESSID=${sessionId}`;
    }

    if (userAgent != null) {
        headers["User-Agent"] = userAgent;
    }

    return headers;
};
