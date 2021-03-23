import { Type } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import { ShowcasePin } from "./ShowcasePin";

export class Collection extends Transformable {
    total!: number;
    account!: string;

    @Type(/* istanbul ignore next */ () => ShowcasePin)
    entries!: ShowcasePin[];
}
