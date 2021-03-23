import { Type } from "class-transformer";

import { Stat } from "./Stat";

export class Group {
    label!: string;

    @Type(/* istanbul ignore next */ () => Group)
    entries!: Stat[];
}
