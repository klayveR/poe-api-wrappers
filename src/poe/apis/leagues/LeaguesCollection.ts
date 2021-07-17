import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { League } from "./League";

/**
 * @hidden
 */
export class LeaguesCollection extends Transformable {
    @Type(/* istanbul ignore next */ () => League)
    leagues!: League[];
}
