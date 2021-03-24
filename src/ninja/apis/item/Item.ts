import { TransformNullToUndefined } from "../../../common/decorators";
import { Transformable } from "../../../common/classes";
import { Sparkline } from "../../shared/models";
import { Modifier } from "./models/Modifier";
import { TradeInfo } from "./models/TradeInfo";

export class Item extends Transformable {
    id!: number;
    name!: string;
    mapTier!: number;
    levelRequired!: number;
    stackSize!: number;
    links!: number;
    itemClass!: number;
    sparkline!: Sparkline;
    lowConfidenceSparkline!: Sparkline;
    implicitModifiers!: Modifier[];
    explicitModifiers!: Modifier[];
    corrupted!: boolean;
    gemLevel!: number;
    gemQuality!: number;
    itemType!: string;
    chaosValue!: number;
    exaltedValue!: number;
    count!: number;
    detailsId!: string;
    listingCount!: number;

    @TransformNullToUndefined()
    icon?: string;

    @TransformNullToUndefined()
    baseType?: string;

    @TransformNullToUndefined()
    variant?: string;

    @TransformNullToUndefined()
    prophecyText?: string;

    @TransformNullToUndefined()
    artFilename?: string;

    @TransformNullToUndefined()
    flavourText?: string;

    @TransformNullToUndefined()
    tradeInfo?: TradeInfo;

    @TransformNullToUndefined()
    mapRegion?: string;
}
