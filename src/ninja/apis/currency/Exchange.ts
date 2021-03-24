import { Expose, Type } from "class-transformer";

export class Exchange {
    id!: number;
    count!: number;
    value!: number;

    /**
     * @overrides `league_id`
     */
    @Expose({ name: "league_id" })
    leagueId!: number;

    /**
     * @overrides `pay_currency_id`
     */
    @Expose({ name: "pay_currency_id" })
    payCurrencyId!: number;

    /**
     * @overrides `get_currency_id`
     */
    @Expose({ name: "get_currency_id" })
    getCurrencyId!: number;

    /**
     * @overrides `sample_time_utc`
     */
    @Expose({ name: "sample_time_utc" })
    @Type(/* istanbul ignore next */ () => Date)
    sampleTime!: Date;

    /**
     * @overrides `data_point_count`
     */
    @Expose({ name: "data_point_count" })
    dataPointCount!: number;

    /**
     * @overrides `includes_secondary`
     */
    @Expose({ name: "includes_secondary" })
    includesSecondary!: boolean;

    /**
     * @overrides `listing_count`
     */
    @Expose({ name: "listing_count" })
    listingCount!: number;
}
