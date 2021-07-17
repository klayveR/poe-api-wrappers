import { Expose } from "class-transformer";

import { Transformable } from "../../../common/classes";

export class AccessToken extends Transformable {
    /**
     * @overrides `access_token`
     */
    @Expose({ name: "access_token" })
    token!: string;

    /**
     * @overrides `expires_in`
     */
    @Expose({ name: "expires_in" })
    expiresIn!: number | null;

    /**
     * @overrides `token_type`
     */
    @Expose({ name: "token_type" })
    type!: string;

    /**
     * @overrides `scope`
     */
    @Expose({ name: "scope" })
    scope!: string;

    /**
     * @overrides `refresh_token`
     */
    @Expose({ name: "refresh_token" })
    refreshToken?: string;
}
