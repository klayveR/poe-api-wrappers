import { Transform, Type } from "class-transformer";
import { Transformable } from "../../../common/classes";

import { Account } from "../account";

export class StashAction extends Transformable {
    id!: string;
    league!: string;
    item!: string;
    action!: string;

    @Transform(({ value }) => new Date(value * 1000), { toClassOnly: true })
    time!: Date;

    @Type(/* istanbul ignore next */ () => Account)
    account!: Account;
}
