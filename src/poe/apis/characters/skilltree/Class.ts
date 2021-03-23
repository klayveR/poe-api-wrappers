import { Expose } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import { Ascendancy } from "./models";

export class Class extends Transformable {
    name!: string;
    ascendancies!: Ascendancy[];

    /**
     * @overrides `base_str`
     */
    @Expose({ name: "base_str" })
    baseStr!: number;

    /**
     * @overrides `base_dex`
     */
    @Expose({ name: "base_dex" })
    baseDex!: number;

    /**
     * @overrides `base_int`
     */
    @Expose({ name: "base_int" })
    baseInt!: number;
}
