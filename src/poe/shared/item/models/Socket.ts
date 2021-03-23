import { Attribute } from "./Attribute";
import { SocketColour } from "./SocketColour";

export interface Socket {
    group: number;
    attr: Attribute | string;
    sColour: SocketColour | string;
}
