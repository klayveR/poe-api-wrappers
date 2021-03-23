import { Expose } from "class-transformer";

/**
 * @hidden
 */
export class Name {
    /**
     * @overrides `accountName`
     */
    @Expose({ name: "accountName" })
    name!: string;
}
