import { Expose, Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Language } from "../../shared/models";
import { Item } from "./Item";

export class Collection extends Transformable {
    /**
     * @overrides `lines`
     */
    @Expose({ name: "lines" })
    @Type(/* istanbul ignore next */ () => Item)
    entries!: Item[];

    language!: Language;
}
