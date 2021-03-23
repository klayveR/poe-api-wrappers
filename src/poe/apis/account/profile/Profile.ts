import { Expose } from "class-transformer";

import { Account } from "../Account";

export class Profile extends Account {
    /**
     * @overrides `avatar_url`
     */
    @Expose({ name: "avatar_url" })
    avatarUrl!: string;

    messages!: number;
    badges!: unknown;
}
