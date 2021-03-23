import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";

export class Guild extends Transformable {
    id!: string;
    name!: string;
    tag!: string;
    points!: number;
    statusMessage!: string;

    @Type(/* istanbul ignore next */ () => Date)
    createdAt!: Date;
}
