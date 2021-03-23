import { SkillSprite } from "./SkillSprite";

export interface SkillSprites {
    normalActive: SkillSprite[];
    notableActive: SkillSprite[];
    keystoneActive: SkillSprite[];
    normalInactive: SkillSprite[];
    notableInactive: SkillSprite[];
    keystoneInactive: SkillSprite[];
    mastery: SkillSprite[];
}
