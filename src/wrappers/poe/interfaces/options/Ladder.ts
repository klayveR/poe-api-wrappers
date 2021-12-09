import { defaultRealmOptions, RealmOptions } from "./Realm";

export interface LadderOptions extends RealmOptions {
    /**
     * Specifies the number of ladder entries to include.
     *
     * *default:* `200`, *maximum:* `200`
     */
    limit?: number;

    /**
     * Specifies the offset to the first ladder entry to include.
     *
     * *default:* `0`
     */
    offset?: number;

    /**
     * Specifies the sorting method for the ladder.
     *
     * `xp` Sort by experience
     *
     * `depth` Sort by Delve depth
     *
     * `depthsolo` Sort by Delve (solo) depth
     *
     * `time` Sort by objective finish time
     *
     * `score` Sort by objective score
     *
     * `class` Only include characters of a specific class sorted by experience
     *
     * *default:* either `xp` or `time` depending on the league
     */
    sort?: "xp" | "depth" | "depthsolo" | "time" | "score" | "class";

    /**
     * Filters the ladder by class.
     *
     * `0` Scion
     *
     * `1` Marauder
     *
     * `2` Ranger
     *
     * `3` Witch
     *
     * `4` Duelist
     *
     * `5` Templar
     *
     * `6` Shadow
     */
    class?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * @hidden
 */
export const defaultLadderOptions: LadderOptions = {
    ...defaultRealmOptions,
    limit: 200,
    offset: 0,
};
