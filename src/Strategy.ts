import { Strategy as OAuth2Strategy, StrategyOptions as OAuth2StrategyOptions, InternalOAuthError } from "passport-oauth2";
import { Profile as OAuth2Profile } from "@oauth-everything/profile";
import {
    ExtendableStrategyOptions,
    ExtendableStrategyOptionsWithRequest,
    OAuth2VerifyCallback,
    OAuth2VerifyFunction,
    OAuth2VerifyFunctionWithRequest,
    OAuth2VerifyFunctionWithResults,
    OAuth2VerifyFunctionWithRequestAndResults
} from "@oauth-everything/oauth2-types";

import { UsersResponse } from "./ApiData";
import { buildPhotos } from "./Util";

export interface TokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export type Profile = OAuth2Profile<UsersResponse>;
export type StrategyOptions = ExtendableStrategyOptions<{}>;
export type StrategyOptionsWithRequest = ExtendableStrategyOptionsWithRequest<{}>;
export type VerifyCallback<TUser = object, TInfo = object> = OAuth2VerifyCallback<TUser, TInfo>;
export type VerifyFunction<TUser, TInfo> = OAuth2VerifyFunction<Profile, TUser, TInfo>;
export type VerifyFunctionWithRequest<TUser, TInfo> = OAuth2VerifyFunctionWithRequest<Profile, TUser, TInfo>;
export type VerifyFunctionWithResults<TUser, TInfo> = OAuth2VerifyFunctionWithResults<TokenResponse, Profile, TUser, TInfo>;
export type VerifyFunctionWithRequestAndResults<TUser, TInfo> = OAuth2VerifyFunctionWithRequestAndResults<TokenResponse, Profile, TUser, TInfo>;

export class Strategy<TUser = object, TInfo = object> extends OAuth2Strategy {

    public name = "twitch";
    private clientID: string;

    constructor(
        options: StrategyOptions,
        verify: VerifyFunction<TUser, TInfo>
            | VerifyFunctionWithResults<TUser, TInfo>
    )

    constructor(
        options: StrategyOptionsWithRequest,
        verify: VerifyFunctionWithRequest<TUser, TInfo>
            | VerifyFunctionWithRequestAndResults<TUser, TInfo>
    )

    constructor(
        options: StrategyOptions
            | StrategyOptionsWithRequest,
        verify: VerifyFunction<TUser, TInfo>
            | VerifyFunctionWithResults<TUser, TInfo>
            | VerifyFunctionWithRequest<TUser, TInfo>
            | VerifyFunctionWithRequestAndResults<TUser, TInfo>
    ) {
        super(
            {
                authorizationURL: "https://id.twitch.tv/oauth2/authorize",
                tokenURL: "https://id.twitch.tv/oauth2/token",
                ...options
            } as OAuth2StrategyOptions,
            verify as VerifyFunction<TUser, TInfo>
        );
        this.clientID = options.clientID;
    }

    public userProfile(accessToken: string, done: (err?: Error | null, profile?: Profile | null) => void): void {

        this._oauth2.useAuthorizationHeaderforGET(true);
        let headers = {
            'Authorization': "Bearer " + accessToken,
            'Client-ID': this.clientID
        };

        //@ts-ignore
        this._oauth2._request("GET", "https://api.twitch.tv/helix/users", headers, "", "", (error, result) => {

            if (error) return done(new InternalOAuthError("Failed to fetch user profile", error));

            let json: UsersResponse;

            try {
                json = JSON.parse(result as string) as UsersResponse;
            }
            catch (parseError) {
                return done(new InternalOAuthError("Failed to parse user profile", parseError));
            }

            if(!json.data || !Array.isArray(json.data) || json.data.length !== 1) return done(new Error("Unexpected user profile format"));

            done(null, {
                provider: this.name,
                id: json.data[0].id,
                username: json.data[0].login,
                displayName: json.data[0].display_name,
                aboutMe: json.data[0].description,
                profileUrl: `https://www.twitch.tv/${json.data[0].login}`,
                emails: json.data[0].email ? [{ value: json.data[0].email }] : [],
                photos: buildPhotos(json.data[0]),
                _raw: result as string,
                _json: json
            });

        });

    }

}
