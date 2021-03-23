import { Type } from "class-transformer";

import { Avatar } from "./Avatar";

export class Collection {
    @Type(/* istanbul ignore next */ () => Avatar)
    collection!: Avatar[];

    total!: number;
}
