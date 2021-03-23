import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Realm } from "../../shared/models";
import * as Ladders from "../ladders";
import { Rule } from "./Rule";

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

    @Type(/* istanbul ignore next */ () => Ladders.Ladder)
    ladder?: Ladders.Ladder;

    /**
     * @remarks
     * If `store` is set to true the [[ladder]] property will be overwritten.
     *
     * @param options
     * @param store If set to `true`, the ladder will be saved in the [[ladder]] property
     * @returns The ladder for this league
     * @throws [[APIError]]
     */
    public async getLadder(options?: Ladders.Options, store = true): Promise<Ladders.Ladder> {
        const ladder = await Ladders.get(this.id, options);

        if (store) {
            this.ladder = ladder;
        }

        return ladder;
    }
}
