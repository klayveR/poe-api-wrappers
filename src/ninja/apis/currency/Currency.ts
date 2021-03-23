import { Transformable } from "../../../common/classes";
import { SparkLine } from "../../shared/models";
import { Exchange } from "./models/Exchange";

export class Currency extends Transformable {
    currencyTypeName!: string;
    pay!: Exchange | null;
    receive!: Exchange | null;
    paySparkLine!: SparkLine;
    receiveSparkLine!: SparkLine;
    chaosEquivalent!: number;
    lowConfidencePaySparkLine!: SparkLine;
    lowConfidenceReceiveSparkLine!: SparkLine;
    detailsId!: string;
}
