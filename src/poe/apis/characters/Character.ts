import { Transformable } from "../../../common/classes";
import { Experience } from "../../shared/constants";
import { Depth } from "./models";

export class Character extends Transformable {
    name!: string;
    level!: number;
    class!: string;
    classId?: number;
    league?: number;
    ascendancyClass?: number;
    id?: string;
    score?: number;
    experience!: number;
    depth?: Depth;

    /**
     * Calculates the current level progression and returns it as a percentage value.
     */
    get levelProgression(): number {
        for (let i = 1; i <= Experience.length; i++) {
            const nextExp = Experience[i];
            if (nextExp > this.experience) {
                const prevExp = Experience[i - 1];

                const remaining = nextExp - this.experience;
                const max = nextExp - prevExp;
                const value = max - remaining;

                return (value / max) * 100;
            }
        }

        return 0;
    }
}
