import { Wrapper } from "@/Wrapper";

/**
 * @internal
 */
export abstract class PathOfExileWrapperBase extends Wrapper {
    /**
     * Set the user agent, must be set to make successful requests, can either be a custom string or an
     * object with the information requested by GGG. If the appropriate object is supplied, it is
     * automatically converted into the correct format.
     *
     * @reference
     * https://www.pathofexile.com/developer/docs/index
     */
    public set userAgent(userAgent: string | { clientId: string; version: string; contact: string }) {
        const value =
            typeof userAgent === "string"
                ? userAgent
                : `${userAgent.clientId}/${userAgent.version} (contact: ${userAgent.contact}) StrictMode`;

        this.setHeader("User-Agent", value);
    }
}
