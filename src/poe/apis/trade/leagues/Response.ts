import { Type } from "class-transformer";

import { League } from "./League";

/**
 * @hidden
 */
export class Response {
    @Type(/* istanbul ignore next */ () => League)
    result!: League[];
}
