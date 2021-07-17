import { buildURL, requestTransformed } from "../../../common/functions";
import { AccessToken } from "./AccessToken";
import { Prompt, Scope } from "./models";

/**
 * Generates an authorization URL for the end-user
 *
 * @reference https://www.pathofexile.com/developer/docs/authorization#grants
 * @param id Client ID
 * @param state A code or hash that you generate to validate the request
 * @param redirectUri URL that you want the result of the authorization request to be sent to
 * @param scopes Array of scopes or space-separated list of scopes
 * @param prompt can either be `consent` (the default) or `none`
 */
export const generateAuthorizationURL = (
    id: string,
    state: string,
    redirectUri: string,
    scopes: Scope[] | string,
    prompt: Prompt = "consent"
): URL => {
    const scope = Array.isArray(scopes) ? scopes.join(" ") : scopes;

    return buildURL(`https://www.pathofexile.com/oauth/authorize`, null, null, {
        client_id: id,
        response_type: "code",
        redirect_uri: redirectUri,
        scope: scope,
        state: state,
        prompt: prompt,
    });
};

/**
 * @endpoint https://www.pathofexile.com/oauth/token
 * @reference https://www.pathofexile.com/developer/docs/authorization#grants
 * @param clientId
 * @param clientSecret
 * @param code Code received from authorization prompt
 * @param redirectUri URL that you want the result of the authorization request to be sent to
 * @param scopes Array of scopes or space-separated list of scopes
 * @throws [[APIError]] [[ResponseError]]
 */
export const getAuthorizationCodeGrant = async (
    clientId: string,
    clientSecret: string,
    code: string,
    redirectUri: string,
    scope: Scope[] | string
): Promise<AccessToken> => {
    const scopeOption = Array.isArray(scope) ? scope.join(" ") : scope;
    const url = buildURL(`https://www.pathofexile.com/oauth/token`, null, null, {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        scope: scopeOption,
    });

    return <AccessToken>await requestTransformed(AccessToken, url, "post");
};

/**
 * @endpoint https://www.pathofexile.com/oauth/token
 * @reference https://www.pathofexile.com/developer/docs/authorization#grants
 * @param clientId
 * @param clientSecret
 * @param scope Array of scopes or space-separated list of scopes
 * @throws [[APIError]] [[ResponseError]]
 */
export const getClientCredentialsGrant = async (
    clientId: string,
    clientSecret: string,
    scope: Scope[] | string
): Promise<AccessToken> => {
    const scopeOption = Array.isArray(scope) ? scope.join(" ") : scope;
    const url = buildURL(`https://www.pathofexile.com/oauth/token`, null, null, {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
        scope: scopeOption,
    });

    return <AccessToken>await requestTransformed(AccessToken, url, "post");
};

/**
 * @endpoint https://www.pathofexile.com/oauth/token
 * @reference https://www.pathofexile.com/developer/docs/authorization#grants
 * @param clientId
 * @param clientSecret
 * @param refreshToken
 * @throws [[APIError]] [[ResponseError]]
 */
export const getRefreshTokenGrant = async (
    clientId: string,
    clientSecret: string,
    refreshToken: string
): Promise<AccessToken> => {
    const url = buildURL(`https://www.pathofexile.com/oauth/token`, null, null, {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken,
    });

    return <AccessToken>await requestTransformed(AccessToken, url, "post");
};
