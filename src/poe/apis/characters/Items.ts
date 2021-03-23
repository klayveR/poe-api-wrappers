import { Type } from "class-transformer";

import { Item } from "../../shared/item";
import { Character } from "./Character";

export class Items {
    @Type(/* istanbul ignore next */ () => Item)
    items!: Item[];

    @Type(/* istanbul ignore next */ () => Character)
    character!: Character;
}
