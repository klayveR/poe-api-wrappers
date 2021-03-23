import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { PlayerResult } from "./PlayerResult";

export class PlayerHistory extends Transformable {
    total!: number;

    @Type(/* istanbul ignore next */ () => PlayerResult)
    entries!: PlayerResult[];
}
