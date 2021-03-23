import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Member } from "./Member";
import { RoleElement, SortType } from "./models";

export class Collection extends Transformable {
    editable!: boolean;
    total!: number;
    sort!: SortType;
    roles!: RoleElement[];

    /**
     * @todo This isn't right
     */
    invitation!: null;

    /**
     * @todo This isn't right
     */
    eligibleAccounts!: null;

    @Type(/* istanbul ignore next */ () => Member)
    members!: Member[];
}
