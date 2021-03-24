import { Expose, Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Language } from "../../shared/models";
import { Currency } from "./Currency";
import { CurrencyDetail } from "./CurrencyDetail";

export class Collection extends Transformable {
    /**
     * @overrides `lines`
     */
    @Expose({ name: "lines" })
    @Type(/* istanbul ignore next */ () => Currency)
    entries!: Currency[];

    @Type(/* istanbul ignore next */ () => CurrencyDetail)
    currencyDetails!: CurrencyDetail[];

    language!: Language;
}
