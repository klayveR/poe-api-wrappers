import { Type } from "class-transformer";

import { Group } from "./Group";

export class Response {
    @Type(/* istanbul ignore next */ () => Group)
    groups!: Group[];
}
