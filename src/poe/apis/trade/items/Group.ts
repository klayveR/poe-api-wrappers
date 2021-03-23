import { Type } from "class-transformer";
import { Transformable } from "../../../../common/classes";

import { Item } from "./Item";

export class Group extends Transformable {
    label!: string;

    @Type(/* istanbul ignore next */ () => Group)
    entries!: Item[];
}
