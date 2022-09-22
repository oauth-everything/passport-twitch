@oauth-everything/passport-twitch
=================================

A [Passport](http://passportjs.org/) strategy for authenticating with
[Twitch](https://www.twitch.tv/) using OAuth 2.0 and the Twitch API.

Note: This is not a full API client, this just handles OAuth authentication.

## Install

```bash
$ npm install @oauth-everything/passport-twitch
```

#### Configure Strategy

The Twitch authentication strategy authenticates users using a Twitch
account and OAuth 2.0 tokens.  The app ID and secret obtained when creating an
application are supplied as options when creating the strategy.  The strategy
also requires a `verify` callback, which receives the access token and optional
refresh token, as well as `profile` which contains the authenticated user's
Twitch profile.  The `verify` callback must call `cb` providing a user to
complete authentication.

```ts
passport.use(new Strategy(
    {
        clientID: TWITCH_APP_ID,
        clientSecret: TWITCH_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/twitch/callback",
    },
    (accessToken: string, refreshToken: string, profile: Profile, cb: VerifyCallback<User>) => {
        User.findOrCreate({ twitchId: profile.id }, (err: Error, user: User) => {
            return cb(err, user)
        })
    }
))
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'twitch'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](https://expressjs.com/)
application:

```javascript
app.get('/auth/twitch', passport.authenticate('twitch'))

app.get("/auth/twitch/callback", passport.authenticate("twitch", {
    failureRedirect: "/login",
    successRedirect: "/",
}))
```

## License

[The MPL v2 License](https://opensource.org/licenses/MPL-2.0)
