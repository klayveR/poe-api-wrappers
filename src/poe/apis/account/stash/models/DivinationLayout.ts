import { DivinationCard } from "./DivinationCard";

export interface DivinationLayout {
    cards: DivinationCard[];
    h: number;
    w: number;
    padx: number;
    pady: number;
    scale: number;
}
