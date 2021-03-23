import { Type } from "class-transformer";
import { Transformable } from "../../../../common/classes";

import { Group } from "./Group";

export class Response extends Transformable {
    @Type(/* istanbul ignore next */ () => Group)
    groups!: Group[];
}
