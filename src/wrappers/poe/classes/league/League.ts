import { Type } from "class-transformer";

import { Ladder } from "@/poe/classes";
import { LadderOptions } from "@/poe/interfaces/options";
import { Realm } from "@/poe/types";
import { PathOfExileWrapper } from "@/poe/PathOfExileWrapper";
import { TransformableObject } from "@/TransformableObject";

import { LeagueRule } from "./LeagueRule";

export class League extends TransformableObject {
    public readonly id!: string;
    public readonly realm!: Realm;
    public readonly url!: string;
    public readonly description!: string;
    public readonly event?: boolean;
    public readonly delveEvent?: boolean;
    public readonly timedEvent?: boolean;
    public readonly scoreEvent?: boolean;
    @Type(() => Date) public readonly startAt!: Date;
    @Type(() => Date) public readonly endAt!: Date | null;
    @Type(() => Date) public readonly registerAt!: Date;
    @Type(() => LeagueRule) public readonly rules!: LeagueRule[];

    /**
     * Request the ladder of this league.
     *
     * @param options
     * @param wrapper
     * @returns
     */
    public async requestLadder(options?: LadderOptions, wrapper = PathOfExileWrapper.default): Promise<Ladder> {
        return await wrapper.requestLadder(this.id, options);
    }
}
