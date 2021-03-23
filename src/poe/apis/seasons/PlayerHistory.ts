import { Type } from "class-transformer";

import { PlayerResult } from "./PlayerResult";

export class PlayerHistory {
    total!: number;

    @Type(/* istanbul ignore next */ () => PlayerResult)
    entries!: PlayerResult[];
}
