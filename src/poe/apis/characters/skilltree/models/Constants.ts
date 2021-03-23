import { CharacterAttributes } from "./CharacterAttributes";
import { Classes } from "./Classes";

export interface Constants {
    classes: Classes;
    characterAttributes: CharacterAttributes;
    PSSCentreInnerRadius: number;
    skillsPerOrbit: number[];
    orbitRadii: number[];
}
