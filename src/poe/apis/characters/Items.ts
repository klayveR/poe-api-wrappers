import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Item } from "../../shared/item";
import { Character } from "./Character";

export class Items extends Transformable {
    @Type(/* istanbul ignore next */ () => Item)
    items!: Item[];

    @Type(/* istanbul ignore next */ () => Character)
    character!: Character;
}
