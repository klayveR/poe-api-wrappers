import { FlavourTextRect } from "./FlavourTextRect";

export interface Ascendancy {
    id: string;
    name: string;
    flavourText?: string;
    flavourTextColour?: string;
    flavourTextRect?: FlavourTextRect;
}
