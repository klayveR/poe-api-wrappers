import { Type } from "class-transformer";

import { ShowcasePin } from "./ShowcasePin";

export class Collection {
    total!: number;
    account!: string;

    @Type(/* istanbul ignore next */ () => ShowcasePin)
    entries!: ShowcasePin[];
}
