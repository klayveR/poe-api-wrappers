import { createPoeAxiosInstance } from "@/poe/axiosInstance";
import { PathOfExileWrapperBase } from "@/poe/PathOfExileWrapperBase";

export class PathOfExileOAuthWrapper extends PathOfExileWrapperBase {
    /**
     * Default wrapper instance
     */
    public static readonly default = new this();

    constructor() {
        super(createPoeAxiosInstance("http://api.pathofexile.com"));
    }

    /**
     * Set the access token that should be used for authorization.
     */
    public set accessToken(accessToken: string) {
        if (accessToken.length > 0) {
            this.setHeader("Authorization", `Bearer ${accessToken}`);
        } else {
            this.removeHeader("Authorization");
        }
    }
}
