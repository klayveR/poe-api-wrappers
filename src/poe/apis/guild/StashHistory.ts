import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { StashAction } from "./StashAction";

export class StashHistory extends Transformable {
    truncated!: boolean;

    @Type(/* istanbul ignore next */ () => StashAction)
    entries!: StashAction[];
}
