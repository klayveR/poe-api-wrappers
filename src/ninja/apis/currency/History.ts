import { Expose, Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { HistoryPoint } from "../../shared";

export class History extends Transformable {
    /**
     * @overrides `payCurrencyGraphData`
     */
    @Expose({ name: "payCurrencyGraphData" })
    @Type(/* istanbul ignore next */ () => HistoryPoint)
    sell!: HistoryPoint[];

    /**
     * @overrides `receiveCurrencyGraphData`
     */
    @Expose({ name: "receiveCurrencyGraphData" })
    @Type(/* istanbul ignore next */ () => HistoryPoint)
    buy!: HistoryPoint[];
}
