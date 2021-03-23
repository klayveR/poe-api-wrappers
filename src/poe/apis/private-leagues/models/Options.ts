import { RealmOptions } from "../../../shared/models";
import { SortType } from "./SortType";

export interface MembersOptions extends RealmOptions {
    /**
     * How the list should be sorted
     */
    sort?: SortType;

    /**
     * This specifies the number of members to include.
     *
     * Default: `20`
     */
    limit?: number;

    /**
     * This specifies the offset to the first member to include.
     *
     * Default: `0`
     */
    offset?: number;
}
