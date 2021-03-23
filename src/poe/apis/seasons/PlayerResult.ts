import { Expose } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Trophy } from "./models";

export class PlayerResult extends Transformable {
    leagueId!: string;
    leagueName!: string;
    points!: number;
    pvp!: boolean;
    rank!: number;

    /**
     * @overrides `accountid`
     */
    @Expose({ name: "accountid" })
    accountId!: string;

    trophies!: Trophy[];
}
