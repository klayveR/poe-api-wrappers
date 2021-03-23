import { StashType } from "../../../../shared";
import { Colour } from "./Colour";

export interface Tab {
    n: string;
    i: number;
    id: string;
    type: StashType;
    selected: boolean;
    colour: Colour;
    srcL: string;
    srcC: string;
    srcR: string;
}
