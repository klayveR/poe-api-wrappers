import { Type } from "class-transformer";
import { Transformable } from "../../../../common/classes";

import { Item } from "../../../shared/item";
import { DivinationLayout, Layout, Tab } from "./models";

/**
 * @todo Add remaining stash layouts
 */
export class Stash extends Transformable {
    numTabs!: number;
    quadLayout?: boolean;
    essenceLayout?: { [key: string]: Layout };
    currencyLayout?: { [key: string]: Layout };
    fragmentLayout?: { [key: string]: Layout };
    delveLayout?: { [key: string]: Layout };
    divinationLayout?: DivinationLayout;

    /**
     * @remarks
     * `tabs` must be set to `1` when making the request to receive this data
     */
    tabs?: Tab[];

    @Type(/* istanbul ignore next */ () => Item)
    items?: Item[];
}
