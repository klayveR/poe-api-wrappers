import { Transformable } from "../../../common/classes";
import { TransformNullToUndefined } from "../../../common/decorators";

export class CurrencyDetail extends Transformable {
    id!: number;
    icon!: string;
    name!: string;

    @TransformNullToUndefined()
    tradeId?: string;
}
