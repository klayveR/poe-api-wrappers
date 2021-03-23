import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { PointTransaction } from "./PointTransaction";

export class PointTransactions extends Transformable {
    total!: number;

    @Type(/* istanbul ignore next */ () => PointTransaction)
    entries!: PointTransaction[];
}
