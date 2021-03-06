import { Exclude, Type } from "class-transformer";

import { Transformable } from "../../../../common/classes";
import * as API from "../API";
import { AvatarsOptions } from "../models";
import { Avatar } from "./Avatar";

export class Collection extends Transformable {
    @Exclude()
    private _options: AvatarsOptions = {
        page: 1,
        perPage: 16,
        custom: false,
    };

    @Type(/* istanbul ignore next */ () => Avatar)
    collection!: Avatar[];

    total!: number;

    @Exclude()
    public set options(options: AvatarsOptions) {
        this._options = { ...this._options, ...options };
    }

    /**
     * @remarks
     * Uses the same [[AvatarsOptions]] that have been used getting this avatar collection.
     *
     * @param append If set to `true`, the avatars will be appended to the [[collection]] property
     * @returns The next set of avatars, `null` when there are no more entries
     * @throws [[APIError]]
     */
    public async getNextPage(append = true): Promise<Avatar[] | null> {
        if (this._options.page == null) {
            return null;
        }

        this._options.page += 1;

        const collection = await API.getAvatars(this._options);

        if (collection.collection.length === 0) {
            return null;
        }

        if (append) {
            this.collection.push(...collection.collection);
        }

        return collection.collection;
    }
}
