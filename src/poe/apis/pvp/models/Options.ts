import { RealmOptions } from "../../../shared/models";

export interface MatchOptions extends RealmOptions {
    /**
     * Set this to get PvP matches for a particular season. Leave this unset to retrieve all upcoming PvP matches.
     */
    seasonId?: string;
}
