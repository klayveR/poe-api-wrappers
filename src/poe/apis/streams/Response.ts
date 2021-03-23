import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Stream } from "./Stream";

/**
 * @hidden
 */
export class Response extends Transformable {
    @Type(/* istanbul ignore next */ () => Stream)
    streams!: Stream[];
}
