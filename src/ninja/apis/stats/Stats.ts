import { Expose } from "class-transformer";

export class Stats {
    id!: number;

    /**
     * @overrides `next_change_id`
     */
    @Expose({ name: "next_change_id" })
    nextChangeId!: string;

    /**
     * @overrides `api_bytes_downloaded`
     */
    @Expose({ name: "api_bytes_downloaded" })
    apiBytesDownloaded!: number;

    /**
     * @overrides `stash_tabs_processed`
     */
    @Expose({ name: "stash_tabs_processed" })
    stashTabsProcessed!: number;

    /**
     * @overrides `api_calls`
     */
    @Expose({ name: "api_calls" })
    apiCalls!: number;

    /**
     * @overrides `character_bytes_downloaded`
     */
    @Expose({ name: "character_bytes_downloaded" })
    characterBytesDownloaded!: number;

    /**
     * @overrides `character_api_calls`
     */
    @Expose({ name: "character_api_calls" })
    characterApiCalls!: number;

    /**
     * @overrides `ladder_bytes_downloaded`
     */
    @Expose({ name: "ladder_bytes_downloaded" })
    ladderBytesDownloaded!: number;

    /**
     * @overrides `ladder_api_calls`
     */
    @Expose({ name: "ladder_api_calls" })
    ladderApiCalls!: number;

    /**
     * @overrides `pob_characters_calculated`
     */
    @Expose({ name: "pob_characters_calculated" })
    pobCharactersCalculated!: number;
}
