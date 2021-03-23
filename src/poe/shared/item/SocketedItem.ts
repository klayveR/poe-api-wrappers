import { ItemBase } from "./ItemBase";
import { Property, SocketColour } from "./models";

export class SocketedItem extends ItemBase {
    properties!: Property[];
    descrText!: string;
    socket!: number;
    colour!: SocketColour | null;
}
