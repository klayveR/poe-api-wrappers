import { Expose } from "class-transformer";

export class Avatar {
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
