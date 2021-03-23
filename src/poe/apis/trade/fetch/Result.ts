import { Type } from "class-transformer";

import { Item } from "../../../shared/item";
import { Listing } from "./Listing";

export class Result {
    id!: string;

    @Type(/* istanbul ignore next */ () => Item)
    item!: Item;

    @Type(/* istanbul ignore next */ () => Listing)
    listing!: Listing;
}
