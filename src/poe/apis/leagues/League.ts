import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Realm } from "../../shared/models";
import { Ladder, Options } from "../ladders";
import { Rule } from "./Rule";
import * as API from "../ladders/API";

export class League extends Transformable {
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

    /**
     * @remarks
     * If `store` is set to true and [[ladder]] had a ladder already, it will be overwritten.
     *
     * @param options
     * @param store If set to `true`, the ladder will be saved in the [[ladder]] property
     * @returns The ladder for this league
     * @throws [[APIError]]
     */
    public async getLadder(options?: Options, store = true): Promise<Ladder> {
        const ladder = await API.get(this.id, options);

        if (store) {
            this.ladder = ladder;
        }

        return ladder;
    }
}
