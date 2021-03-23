import { Type } from "class-transformer";

import { ItemBase } from "./ItemBase";
import { IncubatedItem, Influences, Property, Socket } from "./models";
import { SocketedItem } from "./SocketedItem";

export class Item extends ItemBase {
    sockets?: Socket[];
    properties?: Property[];
    flavourText?: string[];
    x!: number;
    y!: number;
    inventoryId!: string;
    craftedMods?: string[];
    descrText?: string;
    enchantMods?: string[];
    itemLevel?: number;
    prophecyText?: string;
    utilityMods?: string[];
    artFilename?: string;
    note?: string;
    talismanTier?: number;
    influences?: Influences;
    elder?: boolean;
    shaper?: boolean;
    incubatedItem?: IncubatedItem;
    delve?: boolean;
    veiledMods?: string[];
    veiled?: boolean;
    duplicated?: boolean;
    isRelic?: boolean;
    cosmeticMods?: string[];
    stackSizeText?: string;
    replica?: boolean;
    cisRaceReward?: boolean;

    @Type(/* istanbul ignore next */ () => SocketedItem)
    socketedItems?: SocketedItem[];
}
