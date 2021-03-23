import { Expose, Type } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import { Item } from "./Item";

export class Group extends Transformable {
    group!: string;
    groupName!: string;

    /**
     * @overrides `MTXItems`
     */
    @Expose({ name: "MTXItems" })
    @Type(/* istanbul ignore next */ () => Item)
    items!: Item[];
}
