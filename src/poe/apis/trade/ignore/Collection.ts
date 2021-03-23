import { Expose } from "class-transformer";

import { Account } from "./models/Account";
import { Pagination } from "./models/Pagination";

export class Collection {
    pagination!: Pagination;

    /**
     * @overrides `result`
     */
    @Expose({ name: "result" })
    accounts!: Account[];
}
