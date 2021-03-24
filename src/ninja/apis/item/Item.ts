import { Transformable } from "../../../common/classes";
import { Sparkline } from "../../shared/models";
import { Modifier } from "./models/Modifier";
import { TradeInfo } from "./models/TradeInfo";

export class Item extends Transformable {
    id!: number;
    name!: string;
    icon!: null | string;
    mapTier!: number;
    levelRequired!: number;
    baseType!: null | string;
    stackSize!: number;
    variant!: null | string;
    prophecyText!: null | string;
    artFilename!: null | string;
    links!: number;
    itemClass!: number;
    sparkline!: Sparkline;
    lowConfidenceSparkline!: Sparkline;
    implicitModifiers!: Modifier[];
    explicitModifiers!: Modifier[];
    flavourText!: null | string;
    corrupted!: boolean;
    gemLevel!: number;
    gemQuality!: number;
    itemType!: string;
    chaosValue!: number;
    exaltedValue!: number;
    count!: number;
    detailsId!: string;
    tradeInfo!: TradeInfo | null;
    mapRegion!: string | null;
    listingCount!: number;
}
