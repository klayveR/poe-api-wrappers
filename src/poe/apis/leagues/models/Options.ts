import { RealmOptions } from "../../../shared/models";

export interface Options extends RealmOptions {
    /**
     * Restricts the amount of results returned.
     *
     * Default: `50`
     *
     * Max: `50`
     */
    limit?: number;

    /**
     * Specifies the offset to the first league entry to include.
     *
     * Default: `0`
     */
    offset?: number;

    /**
     * `main`: Retrieves permanant and challenge leagues
     *
     * `event`: Retrieves event leagues
     *
     * `season`: Retrieves leagues in a particular season.
     *
     * Default: `main`
     */
    type?: "main" | "event" | "season";

    /**
     * A particular season id. Required when `type=season`.
     */
    season?: string;
}
