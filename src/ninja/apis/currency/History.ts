import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { HistoryPoint } from "../../shared";

export class History extends Transformable {
    @Type(/* istanbul ignore next */ () => HistoryPoint)
    payCurrencyGraphData!: HistoryPoint[];

    @Type(/* istanbul ignore next */ () => HistoryPoint)
    receiveCurrencyGraphData!: HistoryPoint[];
}
