import { Expose } from "class-transformer";

import { Ascendancy } from "./models";

export class Class {
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
