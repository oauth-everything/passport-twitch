// Imports
import express from 'express'
import session, { MemoryStore } from 'express-session'
import passport from 'passport'
import { Profile, Scope, Strategy, VerifyCallback } from '@oauth-everything/passport-twitch'
import { ExampleUserStore, ExampleUser } from './ExampleUserStore'

// First, we define the type of express's `request.user` object. Typically this
// is the user model from your database.
declare global {
    namespace Express {
        interface User extends ExampleUser { }
    }
}

// Next, we need to configure the passport strategies we want to be able to use

//----- Session Strategy -----

// Passport comes with a built-in `session` auth strategy that is used to
// maintain a login session between requests. To use this strategy, we need to
// tell passport how to serialize and deserialize the user object.

// The `serializeUser` function tells passport how to serialize the current
// user so it can be saved into the express session. For most applications,
// you will want to return a unique id for the user so you can look them up
// later instead of serializing the entire user object.
passport.serializeUser((user, done) => {
    const serializedUser = user.id
    done(null, serializedUser)
})

// The `deserializeUser` function tells passport how to deserialize the
// current user from the data in the express session. In this example, we
// are using the user's unique id to look up their data.
passport.deserializeUser((id: string, done) => {
    try {
        // Look up the user id in our database
        const deserializedUser = ExampleUserStore.getUserById(id)
        // Return the user
        done(null, deserializedUser)
    } catch (error) {
        // Return the error
        done(error, null)
    }
})

//----- Twitch Strategy -----

// We also need to tell passport how to use the Twitch auth strategy.
passport.use(new Strategy(
    {
        /* Required settings: */

        // The Client Id for your Twitch application (See "Twitch Application Setup" in the README)
        clientID: "abcdefghijklmnopqrstuvwxyz",

        // The Client Secret for your Twitch application (See "Twitch Application Setup" in the README)
        clientSecret: "abcdefghijklmnopqrstuvwxyz",

        // The callback URL - This is the OAuth Redirect URL for your Twitch application.
        // (See "Twitch Application Setup" in the README)
        // It is a combination of your app's public URL and the callback route you set up in express.
        callbackURL: "http://localhost:8080/auth/twitch/callback",

        /* Optional settings: */

        // The scopes for your OAuth request - For example, if you need access
        // to the user's email address, you would add `Scope.USER_READ_EMAIL`
        scope: [Scope.USER_READ_EMAIL]
    },
    (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback<ExampleUser>) => {
        // The `profile` parameter here is the standardized user profile from passport.
        // You can access the raw Twitch profile response using the `profile.data` property.

        // Note, passport-twitch only handles authentication - it is not a full API client.
        // If you want extra information about the Twitch user (such as followers), you
        // will need to make your own request to the Twitch API using the `accessToken`.

        // You should use this data to create or update the user's information in your
        // database, and then return the user using `done`.
        const myUser = ExampleUserStore.createOrUpdateUserFromProfile(accessToken, refreshToken, profile)

        done(null, myUser)
    }
))

// Now that Passport is set up, we can set up our express app and connect it to passport

// Create a new express app
const app = express();

// Add session support so we can save the user between requests
// IMPORTANT: For this example we are using an in-memory session store. In a real application
// you should use a better one (See https://www.npmjs.com/package/express-session#compatible-session-stores).
// Also, the secret should be randomly generated and stored outside your code somewhere.
app.use(session({
    secret: "abcdefghijklmnopqrstuvwxyz",
    resave: false,
    saveUninitialized: false,
    store: new MemoryStore(),
}))

// Initialize passport and attatch it to the express app
app.use(passport.initialize())

// Add the session middleware to allow the user to maintain a login session between requests
app.use(passport.session())

// Add an express route to start the Twitch OAuth request
app.get("/auth/twitch", passport.authenticate("twitch"))

// Add an express route to handle the callback from the Twitch Oauth request
app.get("/auth/twitch/callback", passport.authenticate("twitch", {
    failureRedirect: "/login",
    successRedirect: "/"
}))

// Example logout endpoint
app.post('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err)
        res.redirect('/')
    })
})

// Here's an example page that checks if the user is logged in and shows their information
app.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        // User is logged in
        res
            .status(200)
            .header('Content-Type', 'text/html')
            .send(`
                <h2>Welcome ${req.user.displayName}!</h2>
                <p><code>req.user<code>:</p>
                <pre>${JSON.stringify(req.user)}</pre>
                <form action="/logout" method="post"><input type="submit" value="Logout"></form>
            `)
    } else {
        // User is not logged in
        res
            .status(200)
            .header('Content-Type', 'text/html')
            .send(`
                <a href="/auth/twitch">Login with your Twitch account</a>
            `)
    }
})

// Start the app
app.listen(8080, () => console.log("Example app started at http://localhost:8080"))
