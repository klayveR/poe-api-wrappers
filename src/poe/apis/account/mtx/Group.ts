import { Expose, Type } from "class-transformer";

import { Item } from "./Item";

export class Group {
    group!: string;
    groupName!: string;

    /**
     * @overrides `MTXItems`
     */
    @Expose({ name: "MTXItems" })
    @Type(/* istanbul ignore next */ () => Item)
    items!: Item[];
}
