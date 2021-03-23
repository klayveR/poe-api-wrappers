import { Transformable } from "../../../common/classes";
import { Entry } from "./models";

export class Collection extends Transformable {
    total!: number;
    entries!: Entry[];
}
