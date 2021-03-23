import { Expose } from "class-transformer";

import { Transformable } from "../../../../common/classes";

export class Avatar extends Transformable {
    custom!: boolean;
    name?: string | null;
    image!: string;
    current!: boolean;

    /**
     * @overrides `avatar_id`
     */
    @Expose({ name: "avatar_id" })
    id!: number;
}
