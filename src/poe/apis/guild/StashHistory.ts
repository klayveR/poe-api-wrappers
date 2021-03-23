import { Type } from "class-transformer";

import { StashAction } from "./StashAction";

export class StashHistory {
    truncated!: boolean;

    @Type(/* istanbul ignore next */ () => StashAction)
    entries!: StashAction[];
}
