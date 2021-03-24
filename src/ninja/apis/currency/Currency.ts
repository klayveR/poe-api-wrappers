import { Expose, Type } from "class-transformer";
import { TransformNullToUndefined } from "../../../common/decorators";
import { Transformable } from "../../../common/classes";
import { Sparkline } from "../../shared/models";
import { Exchange } from "./Exchange";

export class Currency extends Transformable {
    chaosEquivalent!: number;
    detailsId!: string;

    /**
     * @overrides `currencyTypeName`
     */
    @Expose({ name: "currencyTypeName" })
    name!: string;

    /**
     * @overrides `paySparkLine`
     */
    @Expose({ name: "paySparkLine" })
    sellSparkline!: Sparkline;

    /**
     * @overrides `receiveSparkLine`
     */
    @Expose({ name: "receiveSparkLine" })
    buySparkline!: Sparkline;

    /**
     * @overrides `lowConfidencePaySparkLine`
     */
    @Expose({ name: "lowConfidencePaySparkLine" })
    lowConfidenceSellSparkline!: Sparkline;

    /**
     * @overrides `lowConfidenceReceiveSparkLine`
     */
    @Expose({ name: "lowConfidenceReceiveSparkLine" })
    lowConfidenceBuySparkline!: Sparkline;

    /**
     * @overrides `pay`
     */
    @Expose({ name: "pay" })
    @Type(/* istanbul ignore next */ () => Exchange)
    @TransformNullToUndefined()
    sell?: Exchange;

    /**
     * @overrides `receive`
     */
    @Expose({ name: "receive" })
    @Type(/* istanbul ignore next */ () => Exchange)
    @TransformNullToUndefined()
    buy?: Exchange;
}
