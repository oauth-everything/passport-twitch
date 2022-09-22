import { Profile } from '@oauth-everything/passport-twitch';

/**
 * An example user type.
 * Typically this will be the user model from your database.
 */
export interface ExampleUser {
    id: string
    username: string
    displayName: string
    accessToken: string
    refreshToken: string
}

/**
 * An example user store. For this example, users are just stored in memory.
 * In a real application you would want to save them in a database somewhere.
 */
export class ExampleUserStore {
    static database = new Map<string, ExampleUser>()
    static getUserById(id: string): ExampleUser {
        const user = this.database.get(id)
        if (user) return user
        else throw new Error("User not found")
    }
    static createOrUpdateUserFromProfile(accessToken: string, refreshToken: string, profile: Profile): ExampleUser {
        const user = {
            id: profile.id,
            username: profile.username ?? "unknown",
            displayName: profile.displayName ?? "Unknown",
            accessToken, refreshToken
        }
        this.database.set(profile.id, user)
        return user
    }
}
