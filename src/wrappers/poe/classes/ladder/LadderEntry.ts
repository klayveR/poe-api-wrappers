import { TransformableObject } from "@/TransformableObject";

export class LadderEntry extends TransformableObject {
    public readonly rank!: number;
    public readonly dead!: boolean;
    public readonly character!: any;
    public readonly account: any;
    public readonly public?: boolean;
}
