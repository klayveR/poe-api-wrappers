import { Item } from "./models/Item";

export class Group {
    id!: string;
    label!: null | string;
    entries!: Item[];
}
