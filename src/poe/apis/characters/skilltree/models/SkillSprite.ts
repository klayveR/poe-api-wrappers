import { Coord } from "./Coord";

export interface SkillSprite {
    filename: string;
    coords: { [key: string]: Coord };
}
