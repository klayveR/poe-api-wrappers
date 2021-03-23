import { Option } from "./models";
import { Type } from "./models/Type";

export class Stat {
    id!: string;
    text!: string;
    type!: Type;
    option?: {
        options: Option[];
    };
}
