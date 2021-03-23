import { Transformable } from "../../../../common/classes";
import { Property } from "../../../shared/item";

export class Item extends Transformable {
    slot!: null;
    count!: number;
    verified!: boolean;
    w!: number;
    h!: number;
    icon!: string;
    stackSize?: number;
    maxStackSize?: number;
    league!: string;
    name!: string;
    typeLine!: string;
    identified!: boolean;
    ilvl!: number;
    properties?: Property[];
    explicitMods!: string[];
    frameType!: number;
    descrText?: string;
}
