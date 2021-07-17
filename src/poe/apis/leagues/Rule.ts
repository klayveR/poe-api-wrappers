import { Transformable } from "../../../common/classes";

export class Rule extends Transformable {
    id!: string;
    name!: string;
    description?: string;
}
