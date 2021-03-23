import { Transformable } from "../../../../common/classes";
import { Option } from "./models";
import { Type } from "./models/Type";

export class Stat extends Transformable {
    id!: string;
    text!: string;
    type!: Type;
    option?: {
        options: Option[];
    };
}
