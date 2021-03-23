import { Expose } from "class-transformer";
import { Transformable } from "../../../../common/classes";

export class ShowcasePin extends Transformable {
    /**
     * @overrides `character_id`
     */
    @Expose({ name: "character_id" })
    characterId!: number | null;

    /**
     * @overrides `foreign_id`
     */
    @Expose({ name: "foreign_id" })
    foreignId!: string | null;

    position!: number;
    type!: string;
    label!: string;
    id!: number;
    icon!: string;
}
