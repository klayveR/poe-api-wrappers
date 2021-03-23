import { Microtransaction } from "./Microtransaction";

export interface Entry {
    id: number;
    startAt: Date;
    endAt: Date;
    imageUrl: string;
    url: string;
    description: string;
    specialType: string;
    cost: number;
    countdownSpecial: boolean;
    countdownImage: null;
    priority: number;
    platform: null;
    microtransaction: Microtransaction;
    category: boolean;
}
