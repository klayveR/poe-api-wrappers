import { ExpansionJewel } from "./ExpansionJewel";

export interface Node {
    skill?: number;
    name?: string;
    icon?: string;
    isNotable?: boolean;
    recipe?: string[];
    stats?: string[];
    group?: number;
    orbit?: number;
    orbitIndex?: number;
    out?: string[];
    in?: string[];
    reminderText?: string[];
    isMastery?: boolean;
    grantedStrength?: number;
    ascendancyName?: string;
    grantedDexterity?: number;
    isAscendancyStart?: boolean;
    isMultipleChoice?: boolean;
    grantedIntelligence?: number;
    isJewelSocket?: boolean;
    expansionJewel?: ExpansionJewel;
    grantedPassivePoints?: number;
    isKeystone?: boolean;
    flavourText?: string[];
    isProxy?: boolean;
    isMultipleChoiceOption?: boolean;
    isBlighted?: boolean;
    classStartIndex?: number;
}
