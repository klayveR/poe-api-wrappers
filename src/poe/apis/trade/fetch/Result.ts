import { Type } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import { Item } from "../../../shared/item";
import { Listing } from "./Listing";

export class Result extends Transformable {
    id!: string;

    @Type(/* istanbul ignore next */ () => Item)
    item!: Item;

    @Type(/* istanbul ignore next */ () => Listing)
    listing!: Listing;
}
