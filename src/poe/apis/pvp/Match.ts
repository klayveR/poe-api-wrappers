import { Type } from "class-transformer";

import { Realm } from "../../shared/models";

export class Match {
    id!: string;
    realm!: Realm;
    url!: string;
    description!: string;
    glickoRatings!: boolean;
    pvp!: boolean;
    style!: string;

    @Type(/* istanbul ignore next */ () => Date)
    startAt!: Date;

    @Type(/* istanbul ignore next */ () => Date)
    endAt!: Date;

    @Type(/* istanbul ignore next */ () => Date)
    registerAt!: Date;
}
