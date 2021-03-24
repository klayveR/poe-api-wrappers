import { Transformable } from "../../../common/classes";
import { Sparkline } from "../../shared/models";
import { Exchange } from "./models/Exchange";

export class Entry extends Transformable {
    currencyTypeName!: string;
    pay!: Exchange | null;
    receive!: Exchange | null;
    paySparkLine!: Sparkline;
    receiveSparkLine!: Sparkline;
    chaosEquivalent!: number;
    lowConfidencePaySparkLine!: Sparkline;
    lowConfidenceReceiveSparkLine!: Sparkline;
    detailsId!: string;
}
