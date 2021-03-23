import { Type } from "class-transformer";

import { Item } from "../../shared/item";

export class Reward {
    requiredPoints!: number;
    itemOffsetY!: number | null;
    itemOffsetX!: number | null;

    @Type(/* istanbul ignore next */ () => Item)
    item!: Item;
}
