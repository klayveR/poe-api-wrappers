import { Expose } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import { Account } from "./models/Account";
import { Pagination } from "./models/Pagination";

export class Collection extends Transformable {
    pagination!: Pagination;

    /**
     * @overrides `result`
     */
    @Expose({ name: "result" })
    accounts!: Account[];
}
