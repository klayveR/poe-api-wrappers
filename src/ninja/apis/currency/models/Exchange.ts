export interface Exchange {
    id: number;
    league_id: number;
    pay_currency_id: number;
    get_currency_id: number;
    sample_time_utc: Date;
    count: number;
    value: number;
    data_point_count: number;
    includes_secondary: boolean;
    listing_count: number;
}
