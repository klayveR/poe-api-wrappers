import { Type } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import { Avatar } from "./Avatar";

export class Collection extends Transformable {
    @Type(/* istanbul ignore next */ () => Avatar)
    collection!: Avatar[];

    total!: number;
}
