import { Transformable } from "../../../../common/classes";
import { Flags } from "./models/Flags";

export interface Item extends Transformable {
    name?: string;
    type: string;
    text: string;
    flags?: Flags;
    disc?: string;
}
