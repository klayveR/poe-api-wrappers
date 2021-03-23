import { Expose, Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Item } from "../../shared/item";
import { Data } from "./skilltree/Data";

export class PassiveSkills extends Transformable {
    hashes!: number[];

    /**
     * @overrides `visual_overrides`
     */
    @Expose({ name: "visual_overrides" })
    visualOverrides!: Array<Array<number | string>>;

    @Type(/* istanbul ignore next */ () => Item)
    items!: Item;

    /**
     * @remarks
     * `reqData` must be set to `1` when making the request to receive this data
     */
    @Type(/* istanbul ignore next */ () => Data)
    skillTreeData?: Data;
}
