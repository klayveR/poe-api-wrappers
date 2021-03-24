import { Expose, Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Language } from "../../shared/models";
import { Entry } from "./Entry";

export class Collection extends Transformable {
    /**
     * @overrides `lines`
     */
    @Expose({ name: "lines" })
    @Type(/* istanbul ignore next */ () => Entry)
    entries!: Entry[];

    language!: Language;
}
