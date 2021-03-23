import { Type } from "class-transformer";
import { Transformable } from "../../../common/classes";

import { Item } from "../../shared/item";

export class Reward extends Transformable {
    requiredPoints!: number;
    itemOffsetY!: number | null;
    itemOffsetX!: number | null;

    @Type(/* istanbul ignore next */ () => Item)
    item!: Item;
}
