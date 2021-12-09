import { Exclude, Expose, Type } from "class-transformer";

import { defaultLadderOptions, LadderOptions } from "@/poe/interfaces/options";
import { PathOfExileWrapper } from "@/poe/PathOfExileWrapper";
import { TransformableObject } from "@/TransformableObject";

import { LadderEntry } from "./LadderEntry";

export class Ladder extends TransformableObject {
    @Exclude() private league: string = "";
    @Exclude() private options: LadderOptions = defaultLadderOptions;

    public readonly total!: number;

    /**
     * @original `cached_since`
     */
    @Type(() => Date)
    @Expose({ name: "cached_since" })
    public readonly cachedSince!: Date;

    @Type(() => LadderEntry)
    public readonly entries!: LadderEntry[];

    /**
     * Initializes the ladder.
     *
     * @internal
     * @param league League ID
     * @param options
     */
    public initialize(league: string, options: LadderOptions): void {
        this.league = league;
        this.options = options;
    }

    /**
     * Request the next set of ladder entries. If the request was successful, the new entries will
     * automatically be appended to [[Ladder.entries]].
     *
     * Uses the [[LadderOptions.limit]] value that was supplied for the initial ladder request.
     *
     * The offset starts at the [[LadderOptions.offset]] value that was supplied for the initial
     * ladder request and is automatically increased after every successful request.
     *
     * @param wrapper
     * @returns The next set of ladder entries
     */
    public async requestNextEntries(wrapper = PathOfExileWrapper.default): Promise<LadderEntry[]> {
        let offset = this.options.offset || defaultLadderOptions.offset!;
        let limit = this.options.limit || defaultLadderOptions.limit!;

        offset += limit;

        if (offset >= this.total) {
            return [];
        }

        const remainingEntries = this.total - offset;
        if (remainingEntries < limit) {
            limit = remainingEntries;
        }

        const nextRequestOptions = Object.assign({}, this.options, { offset, limit });
        const ladder = await wrapper.requestLadder(this.league, nextRequestOptions);

        this.entries.push(...ladder.entries);
        this.options.offset = offset;

        return ladder.entries;
    }
}
