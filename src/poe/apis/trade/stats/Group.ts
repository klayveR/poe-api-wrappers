import { Type } from "class-transformer";
import { Transformable } from "../../../../common/classes";

import { Stat } from "./Stat";

export class Group extends Transformable {
    label!: string;

    @Type(/* istanbul ignore next */ () => Group)
    entries!: Stat[];
}
