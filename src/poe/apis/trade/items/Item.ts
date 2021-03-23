import { Flags } from "./models/Flags";

export interface Item {
    name?: string;
    type: string;
    text: string;
    flags?: Flags;
    disc?: string;
}
