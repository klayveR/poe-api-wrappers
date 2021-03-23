import { Property } from "./Property";

export interface Hybrid {
    isVaalGem?: boolean;
    baseTypeName: string;
    properties: Property[];
    explicitMods?: string[];
    secDescrText: string;
}
