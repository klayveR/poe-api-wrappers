import { Expose, Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import { Language } from "../../shared/models";
import { Currency } from "./Currency";
import { CurrencyDetail } from "./models";

export class Response extends Transformable {
    /**
     * @overrides `lines`
     */
    @Expose({ name: "lines" })
    @Type(/* istanbul ignore next */ () => Currency)
    currencies!: Currency[];

    currencyDetails!: CurrencyDetail[];
    language!: Language;
}
