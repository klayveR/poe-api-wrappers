import { Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Reward } from "./Reward";

export class Season extends Transformable {
    id!: string;
    htmlId!: string;
    htmlContent!: string | null;
    signatureRaces!: string | null;
    numericId!: number;
    pvp!: boolean;
    configEditorId!: string | null;

    @Type(/* istanbul ignore next */ () => Date)
    startAt!: Date;

    @Type(/* istanbul ignore next */ () => Date)
    endAt!: Date;

    @Type(/* istanbul ignore next */ () => Reward)
    rewards!: Reward[];
}
