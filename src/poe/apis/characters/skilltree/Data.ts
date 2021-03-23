import { Expose, Type } from "class-transformer";

import { Class } from "./Class";
import { Constants, ExtraImage, Group, Node, SkillSprites } from "./models";

export class Data {
    @Type(/* istanbul ignore next */ () => Class)
    classes!: Class[];

    /**
     * @overrides `min_x`
     */
    @Expose({ name: "min_x" })
    minX!: number;

    /**
     * @overrides `min_y`
     */
    @Expose({ name: "min_y" })
    minY!: number;

    /**
     * @overrides `max_x`
     */
    @Expose({ name: "max_x" })
    maxX!: number;

    /**
     * @overrides `max_y`
     */
    @Expose({ name: "max_y" })
    maxY!: number;

    imageZoomLevels!: number[];
    jewelSlots!: number[];
    groups!: { [key: string]: Group };
    nodes!: { [key: string]: Node };
    extraImages!: { [key: string]: ExtraImage };
    assets!: { [key: string]: { [key: string]: string } };
    constants!: Constants;
    skillSprites!: SkillSprites;
}
