import { Type } from "class-transformer";

import { Account } from "../account";
import { Guild } from "./Guild";

export class PointTransaction {
    id!: number;
    points!: number;
    status!: string;
    notes!: string[];
    manual!: boolean;

    @Type(/* istanbul ignore next */ () => Guild)
    guild!: Guild;

    @Type(/* istanbul ignore next */ () => Account)
    account!: Account;

    @Type(/* istanbul ignore next */ () => Date)
    createdAt!: Date;
}
