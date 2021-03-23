import { Type } from "class-transformer";
import { Transformable } from "../../../../common/classes";

import { Account } from "../../account";
import { Price } from "./models/Price";
import { Stash } from "./models/Stash";

export class Listing extends Transformable {
    method!: string;
    stash!: Stash;
    whisper!: string;
    account!: Account;
    price!: Price;

    @Type(/* istanbul ignore next */ () => Date)
    indexed!: Date;
}
