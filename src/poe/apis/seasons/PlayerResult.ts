import { Expose } from "class-transformer";

import { Trophy } from "./models";

export class PlayerResult {
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
