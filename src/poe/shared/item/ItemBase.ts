import { Transformable } from "../../../common/classes";
import { AdditionalProperty, Extended, Hybrid, Property } from "./models";

/***
 * @hidden
 */
export class ItemBase extends Transformable {
    verified!: boolean;
    w!: number;
    h!: number;
    name!: string;
    icon!: string;
    league!: string;
    id!: string;
    typeLine!: string;
    identified!: boolean;
    ilvl!: number;
    requirements?: Property[];
    explicitMods?: string[];
    frameType!: number;
    extended!: Extended;
    support?: boolean;
    corrupted?: boolean;
    additionalProperties?: AdditionalProperty[];
    secDescrText?: string;
    hybrid?: Hybrid;
    nextLevelRequirements?: Property[];
    abyssJewel?: boolean;
    fractured?: boolean;
    fracturedMods?: string[];
    synthesised?: boolean;
    implicitMods?: string[];
    stackSize?: number;
    maxStackSize?: number;
}
