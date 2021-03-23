import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Realm, RealmOptions } from "../../shared/models";
import * as Characters from "../characters";
import { Guild } from "../guild";
import { Stream } from "../streams";
import { Challenges } from "./models";

export class Account extends Transformable {
    name!: string;
    realm!: Realm;
    challenges?: Challenges;

    @Type(/* istanbul ignore next */ () => Stream)
    twitch?: Stream;

    @Type(/* istanbul ignore next */ () => Guild)
    guild?: Guild;

    /**
     * @remarks
     * Trying to get characters when the profile or character tab is private will result in an error.
     *
     * @param options
     * @returns A list of characters from this account
     * @throws [[APIError]]
     */
    public async getCharacters(options?: RealmOptions): Promise<Characters.Character[]> {
        return await Characters.get(this.name, options);
    }
}
