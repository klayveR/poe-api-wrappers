import { Expose } from "class-transformer";

import { Transformable } from "../../../common/classes";

/**
 * @hidden
 */
export class Name extends Transformable {
    /**
     * @overrides `accountName`
     */
    @Expose({ name: "accountName" })
    name!: string;
}
