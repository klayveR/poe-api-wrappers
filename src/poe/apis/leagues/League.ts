import { Type } from "class-transformer";

import { Realm } from "../../shared/models";
import { Ladder } from "../ladders";
import { Rule } from "./Rule";

export class League {
    id!: string;
    realm!: Realm;
    url!: string;
    delveEvent!: boolean;

    description?: string;
    timedEvent?: boolean;
    scoreEvent?: boolean;

    @Type(/* istanbul ignore next */ () => Date)
    startAt!: Date;

    @Type(/* istanbul ignore next */ () => Date)
    endAt!: Date | null;

    @Type(/* istanbul ignore next */ () => Date)
    registerAt?: Date;

    @Type(/* istanbul ignore next */ () => Rule)
    rules?: Rule[];

    @Type(/* istanbul ignore next */ () => Ladder)
    ladder?: Ladder;
}
