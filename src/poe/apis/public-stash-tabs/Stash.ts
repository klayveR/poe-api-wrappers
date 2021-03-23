import { Type } from "class-transformer";

import { Item } from "../../shared/item";
import { StashType } from "../../shared/models";

export class Stash {
    id!: string;
    public!: boolean;
    accountName!: string | null;
    lastCharacterName!: string | null;
    stash!: string | null;
    stashType!: StashType;
    league!: string | null;

    @Type(/* istanbul ignore next */ () => Item)
    items!: Item[];
}
