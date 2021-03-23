import { Type } from "class-transformer";

import { Group } from "./Group";

/**
 * @hidden
 */
export class Response {
    @Type(/* istanbul ignore next */ () => Group)
    result!: Group[];
}
