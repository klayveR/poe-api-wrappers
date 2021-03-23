import { Exclude, Expose, Type } from "class-transformer";
import { Transformable } from "../../../common/classes";

import { Character } from "../characters";
import * as API from "./API";
import { Entry } from "./Entry";
import { Options } from "./models";

export class Ladder extends Transformable {
    @Exclude()
    private _options: Options = {
        limit: 20,
        offset: 0,
    };

    @Exclude()
    private _leagueId = "Standard";

    total!: number;

    /**
     * @overrides `cached_since`
     */
    @Type(/* istanbul ignore next */ () => Date)
    @Expose({ name: "cached_since" })
    cachedSince!: Date;

    @Type(/* istanbul ignore next */ () => Entry)
    entries!: Entry[];

    @Exclude()
    public set options(options: Options) {
        this._options = { ...this._options, ...options };
    }

    @Exclude()
    public set leagueId(id: string) {
        this._leagueId = id;
    }

    /**
     * @remarks
     * Uses the same [[LadderOptions]] that have been used getting this ladder.
     * If you want to fetch an entire ladder, it is highly recommended to set the `limit` option to `200`.
     *
     * @param append Set to `true` if the next entries should be appended to this ladders entries
     * @returns The next set of ladder entries, `null` when there are no more entries
     */
    public async getNextEntries(append = true): Promise<Entry[] | null> {
        if (this._options.offset == null || this._options.limit == null) {
            return null;
        }

        const nextOffset = this._options.offset + this._options.limit;
        if (nextOffset >= this.total) {
            return null;
        }

        // Make sure limit + offset isn't higher than total since that's considered an invalid query
        if (nextOffset + this._options.limit >= this.total) {
            this._options.limit = this.total - nextOffset;
        }

        this._options.offset = nextOffset;

        const ladder = await API.get(this._leagueId, this._options);

        if (append) {
            this.entries.push(...ladder.entries);
        }

        return ladder.entries;
    }

    /**
     * @example
     * Get all characters which have the Assassin ascendancy.
     *
     * ```typescript
     * const assassins = ladder.filterByCharacter("class", "Assassin");
     * console.log(`${assassins.length} of the first 200 characters are Assassins.`);
     * ```
     *
     * @param property Name of a character property
     * @param value Value of the property that should be filtered
     * @returns A new list of characters matching the filter
     */
    public filterByCharacter<K extends keyof Character>(property: K, value: Character[K]): Entry[] {
        return this.entries.filter((entry) => entry.character[property] === value);
    }

    /**
     * @example
     * Display online characters from the ladder.
     *
     * ```typescript
     * const online = ladder.filterBy("online", true);
     * console.log(`${online.length} of the first 200 characters are currently online.`);
     * ```
     *
     * @param property Name of a ladder entry property
     * @param value Value of the property that should be filtered
     * @returns A new list of characters matching the filter
     */
    public filterBy<K extends keyof Entry>(property: K, value: Entry[K]): Entry[] {
        return this.entries.filter((entry) => entry[property] === value);
    }
}
