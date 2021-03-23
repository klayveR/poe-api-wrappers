import { Type } from "class-transformer";

import { Item } from "./Item";

export class Group {
    label!: string;

    @Type(/* istanbul ignore next */ () => Group)
    entries!: Item[];
}
