import { RealmOptions } from "../../../shared/models";

export interface StashOptions extends RealmOptions {
    /**
     * Whether or not to include a list of all stash tabs
     *
     * Default: `0`
     */
    tabs?: 0 | 1;
}

export interface ShowcasePinOptions extends RealmOptions {
    /**
     * Specifies the number of showcase pins to include.
     *
     * Default: `100`
     */
    limit?: number;

    /**
     * Specifies the offset to the showcase pin to include.
     *
     * Default: `0`
     */
    offset?: number;
}

export interface AvatarsOptions {
    /**
     * Page offset
     *
     * Default: `1`
     */
    page?: number;

    /**
     * Results per page
     *
     * Default: `16` (maximum)
     */
    perPage?: number;

    /**
     * When set to `true` only custom avatars (supporter avatars) of the account will be fetched
     *
     * Default: `false`
     */
    custom?: boolean;
}
