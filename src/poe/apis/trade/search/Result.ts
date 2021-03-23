import { Exclude, Expose } from "class-transformer";
import { Transformable } from "../../../../common/classes";

import { Fetch } from "../";
import * as API from "../API";

export class Result extends Transformable {
    @Exclude()
    protected offset = 0;

    @Exclude()
    protected _sessionId: string | undefined;

    id!: string;
    complexity!: number | null;
    total!: number;
    inexact?: boolean;

    /**
     * @overrides `result`
     */
    @Expose({ name: "result" })
    hashes!: string[];

    @Exclude()
    public set sessionId(sessionId: string | undefined) {
        this._sessionId = sessionId;
    }

    /**
     * @remarks
     * Uses the session ID supplied when getting the hashes.
     * Items are fetched in sets of 10.
     *
     * @returns A list of item listings, `null` when there are no more listings to fetch
     * @throws [[APIError]]
     */
    public async getNextItems(): Promise<Fetch.Result[] | null> {
        if (this.offset >= this.hashes.length) {
            return null;
        }

        const hashes = this.hashes.slice(this.offset, this.offset + 10);
        this.offset += 10;

        return await API.getFromHashes(hashes, this._sessionId);
    }
}
