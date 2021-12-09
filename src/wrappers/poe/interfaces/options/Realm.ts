import { Realm } from "@/poe/types";

export interface RealmOptions {
    /**
     * *default:* `pc`
     */
    realm?: Realm;
}

/**
 * @hidden
 */
export const defaultRealmOptions: RealmOptions = {
    realm: "pc",
};
