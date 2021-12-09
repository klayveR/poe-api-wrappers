import { createPoeAxiosInstance } from "@/poe/axiosInstance";
import { League, Ladder, LeagueRule } from "@/poe/classes";
import { defaultLadderOptions, defaultLeaguesOptions, defaultRealmOptions } from "@/poe/interfaces/options";
import { PathOfExileWrapperBase } from "@/poe/PathOfExileWrapperBase";
import { Utility } from "@/Utility";

export class PathOfExileWrapper extends PathOfExileWrapperBase {
    /**
     * Default wrapper instance
     */
    public static readonly default = new this();

    constructor() {
        super(createPoeAxiosInstance("http://www.pathofexile.com"));
    }

    /**
     * Set the session ID cookie that is required to access certain restricted endpoints.
     */
    public set sessionId(sessionId: string) {
        if (sessionId.length > 0) {
            this.setHeader("Cookie", `POESESSID=${sessionId}`);
        } else {
            this.removeHeader("Cookie");
        }
    }

    /**
     * Request a list of leagues.
     *
     * @param options
     * @returns
     */
    public async requestLeagues(options = defaultLeaguesOptions): Promise<League[]> {
        const fullOptions = Utility.applyDefaults(options, defaultLeaguesOptions);
        return await this.requestArray<League>(League, {
            endpoint: "api/leagues",
            method: "GET",
            options: fullOptions,
        });
    }

    /**
     * Request a specific league.
     *
     * @param id ID of the league, for example `Standard` or `SSF Scourge`
     * @param options
     * @returns
     */
    public async requestLeague(id: string, options = defaultRealmOptions): Promise<League> {
        const fullOptions = Utility.applyDefaults(options, defaultRealmOptions);
        return await this.request<League>(League, {
            endpoint: `api/leagues/${id}`,
            method: "GET",
            options: fullOptions,
        });
    }

    /**
     * Request the list of all league rules.
     *
     * @returns
     */
    public async requestLeagueRules(): Promise<LeagueRule[]> {
        return await this.requestArray<LeagueRule>(LeagueRule, {
            endpoint: "api/league-rules",
            method: "GET",
        });
    }

    /**
     * Request a specific league rule.
     *
     * @param id ID of the rule, for example `NoParties` or `Hardcore`
     * @returns
     */
    public async requestLeagueRule(id: string): Promise<LeagueRule[]> {
        return await this.requestArray<LeagueRule>(LeagueRule, {
            endpoint: `api/league-rules/${id}`,
            method: "GET",
        });
    }

    /**
     * Request the ladder of a league.
     *
     * @param leagueId ID of the league, for example `Standard` or `SSF Scourge`
     * @param options
     * @returns
     */
    public async requestLadder(leagueId: string, options = defaultLadderOptions): Promise<Ladder> {
        const fullOptions = {
            id: leagueId,
            ...Utility.applyDefaults(options, defaultLadderOptions),
        };

        const ladder = await this.request<Ladder>(Ladder, {
            endpoint: "api/ladders",
            method: "GET",
            options: fullOptions,
        });

        ladder.initialize(leagueId, options);

        return ladder;
    }
}
