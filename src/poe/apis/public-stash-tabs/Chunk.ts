import { Expose, Type } from "class-transformer";

import { Transformable } from "../../../common/classes";
import * as API from "./API";
import { Stash } from "./Stash";

export class Chunk extends Transformable {
    /**
     * @overrides `next_change_id`
     */
    @Type(/* istanbul ignore next */ () => String)
    @Expose({ name: "next_change_id" })
    nextChangeId!: string;

    @Type(/* istanbul ignore next */ () => Stash)
    stashes!: Stash[];

    /**
     * @throws [[APIError]]
     */
    public async getNext(): Promise<Chunk> {
        return await API.getChunk(this.nextChangeId);
    }
}
