import { defaultRealmOptions, RealmOptions } from "./Realm";

export interface LeaguesOptions extends RealmOptions {
    /**
     * Specifies the number of league entries to include.
     *
     * *default:* `50`, *maximum:* `50`
     */
    limit?: number;

    /**
     * Specifies the offset to the first league entry to include.
     *
     * *default:* `0`
     */
    offset?: number;

    /**
     * `main` Retrieves permanent and challenge leagues
     *
     * `event` Retrieves event leagues
     *
     * `season` Retrieves leagues in a particular season
     *
     * *default:* `main`
     */
    type?: "main" | "event" | "season";

    /**
     * Season ID, required when `type` is set to `season`
     */
    season?: string;
}

/**
 * @hidden
 */
export const defaultLeaguesOptions: LeaguesOptions = {
    ...defaultRealmOptions,
    limit: 50,
    offset: 0,
    type: "main",
};
