import { Type } from "class-transformer";

import { Stream } from "./Stream";

/**
 * @hidden
 */
export class Response {
    @Type(/* istanbul ignore next */ () => Stream)
    streams!: Stream[];
}
