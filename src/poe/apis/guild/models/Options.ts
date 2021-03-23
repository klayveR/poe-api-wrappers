export interface PointTransactionsOptions {
    /**
     * Specifies the number of point transaction entries to include.
     *
     * Default: `5`
     *
     * Max: `100`
     */
    limit?: number;

    /**
     * Specifies the offset to the first point transaction to include.
     *
     * Default: `0`
     */
    offset?: number;
}

export interface StashHistoryOptions {
    /**
     * Timestamp of the the action, from which the next entries should be fetched
     */
    from?: string;

    /**
     * ID of the the action, from which the next entries should be fetched
     */
    fromid?: string;
}
