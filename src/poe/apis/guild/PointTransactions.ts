import { Type } from "class-transformer";

import { PointTransaction } from "./PointTransaction";

export class PointTransactions {
    total!: number;

    @Type(/* istanbul ignore next */ () => PointTransaction)
    entries!: PointTransaction[];
}
