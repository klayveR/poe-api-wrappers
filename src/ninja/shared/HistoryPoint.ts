import { Transformable } from "../../common/classes";

export class HistoryPoint extends Transformable {
    count!: number;
    value!: number;
    daysAgo!: number;
}
