import { TransformableObject } from "@/TransformableObject";

export class LeagueRule extends TransformableObject {
    public readonly id!: string;
    public readonly name!: string;
    public readonly description!: string;
}
