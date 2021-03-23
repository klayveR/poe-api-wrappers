import { Type } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import { Result } from "./Result";

/**
 * @hidden
 */
export class Response extends Transformable {
    @Type(/* istanbul ignore next */ () => Result)
    result!: Result[];
}
