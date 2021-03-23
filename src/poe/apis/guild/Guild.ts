import { Type } from "class-transformer";

export class Guild {
    id!: string;
    name!: string;
    tag!: string;
    points!: number;
    statusMessage!: string;

    @Type(/* istanbul ignore next */ () => Date)
    createdAt!: Date;
}
