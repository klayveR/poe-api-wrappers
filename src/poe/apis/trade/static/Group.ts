import { Transformable } from "../../../../common/classes";
import { Item } from "./models/Item";

export class Group extends Transformable {
    id!: string;
    label!: null | string;
    entries!: Item[];
}
