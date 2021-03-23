import { Type } from "class-transformer";

import { Result } from "./Result";

/**
 * @hidden
 */
export class Response {
    @Type(/* istanbul ignore next */ () => Result)
    result!: Result[];
}
