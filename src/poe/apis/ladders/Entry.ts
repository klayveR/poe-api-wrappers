import { Expose, Type } from "class-transformer";

import { Account } from "../account";
import { Character } from "../characters";

export class Entry {
    rank!: number;
    dead!: boolean;
    retired?: boolean;
    public?: boolean;
    online!: boolean;

    @Type(/* istanbul ignore next */ () => Character)
    character!: Character;

    @Type(/* istanbul ignore next */ () => Account)
    account!: Account;

    /**
     * @returns URL to the character window on the Path of Exile website
     */
    @Expose()
    get characterWindowUrl(): string {
        return `https://www.pathofexile.com/account/view-profile/${this.account.name}/characters?characterName=${this.character.name}`;
    }

    /**
     * @returns URL to the account profile on the Path of Exile website
     */
    @Expose()
    get profileUrl(): string {
        return `https://www.pathofexile.com/account/view-profile/${this.account.name}`;
    }
}
