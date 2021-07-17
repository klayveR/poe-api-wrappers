export class Settings {
    public static accessToken: string | undefined;
    public static sessionId: string | undefined;

    private static _userAgent: string;

    /**
     * Set user agent as requested by Grinding Gear Games
     *
     * @example
     * ```typescript
     * Settings.setUserAgent("mypoeapp", "1.0.0", "mypoeapp@gmail.com");
     * ```
     *
     * @reference https://www.pathofexile.com/developer/docs/index#guidelines
     * @param clientId OAuth client ID or name of your program if you're not using OAuth
     * @param version Current version of your program
     * @param contact Contact e-mail address
     */
    public static setUserAgent(clientId: string, version: string, contact: string): void {
        Settings._userAgent = `OAuth ${clientId}/${version} (contact: ${contact})`;
    }

    public static get userAgent(): string {
        return Settings._userAgent;
    }
}
