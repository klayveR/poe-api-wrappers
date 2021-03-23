import { Type } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import { Group } from "./Group";

/**
 * @hidden
 */
export class Response extends Transformable {
    @Type(/* istanbul ignore next */ () => Group)
    result!: Group[];
}
