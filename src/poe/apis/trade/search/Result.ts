import { Exclude, Expose } from "class-transformer";

import { Fetch } from "../";
import { Transformable } from "../../../../common/classes";
import * as API from "../API";

export class Result extends Transformable {
    @Exclude()
    private offset = 0;

    id!: string;
    complexity!: number | null;
    total!: number;
    inexact?: boolean;

    /**
     * @overrides `result`
     */
    @Expose({ name: "result" })
    hashes!: string[];

    /**
     * @returns A list of item listings in sets of 10, `null` when there are no more listings to fetch
     * @throws [[APIError]]
     */
    public async getNextItems(): Promise<Fetch.Result[] | null> {
        if (this.offset >= this.hashes.length) {
            return null;
        }

        const hashes = this.hashes.slice(this.offset, this.offset + 10);
        this.offset += 10;

        return await API.getFromHashes(hashes);
    }
}
