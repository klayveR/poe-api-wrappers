import { Type } from "class-transformer";

import { Account } from "../../account";
import { Price } from "./models/Price";
import { Stash } from "./models/Stash";

export class Listing {
    method!: string;
    stash!: Stash;
    whisper!: string;
    account!: Account;
    price!: Price;

    @Type(/* istanbul ignore next */ () => Date)
    indexed!: Date;
}
