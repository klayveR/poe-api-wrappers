import { RealmOptions } from "../../../shared/models";

export interface ListOptions extends RealmOptions {
    /**
     * `0`: Displays the full info for leagues retrieved (will only retrieve a maximum of 50 leagues) (the default)
     *
     * `1`: Display compact info for leagues retrieved (will retrieve up to 230 leagues).
     */
    compact?: 0 | 1;

    /**
     * This specifies the number of league entries to include. By default this is the maximum, which depends on the setting above.
     */
    limit?: number;

    /**
     * This specifies the offset to the first league entry to include.
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

export interface LeagueOptions extends RealmOptions {
    /**
     * Set to `true` to include the ladder in the response. The ladder will be in included in the `ladder` key.
     * Please note that the ladder can be retrieved using the ladder resource, and that retrieving it using the league API is just an optimization that can be used if you are requesting the league anyway.
     *
     * Default: `0`
     */
    ladder?: 0 | 1;

    /**
     * When including the ladder with `ladder=1`, this specifies the number of ladder entries to include.
     *
     * Default: `20`
     *
     * Max: `200`
     */
    ladderLimit?: number;
    /**
     * When including the ladder with `ladder=1`, this specifies the offset to the first ladder entry to include.
     *
     * Default: `0`
     */
    ladderOffset?: number;

    /**
     * When including the ladder with `ladder=1`, this setting adds unique IDs for each character returned. These can be used when name conflicts occur.
     *
     * Default: `0`
     */
    ladderTrack?: 0 | 1;
}
