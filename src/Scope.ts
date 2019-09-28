export enum Scope {

    /** View analytics data for your extensions. */
    ANALYTICS_READ_EXTENSIONS = "analytics:read:extensions",

    /** View analytics data for your games. */
    ANALYTICS_READ_GAMES = "analytics:read:games",

    /** View Bits information for your channel. */
    BITS_READ = "bits:read",

    /** Get a list of all subscribers to your channel and check if a user is subscribed to your channel */
    CHANNEL_READ_SUBSCRIPTIONS = "channel:read:subscriptions",

    /** Manage a clip object. */
    CLIPS_EDIT = "clips:edit",

    /** Manage a user object. */
    USER_EDIT = "user:edit",

    /** Edit your channel’s broadcast configuration, including extension configuration. (This scope implies user:read:broadcast capability.) */
    USER_EDIT_BROADCAST = "user:edit:broadcast",

    /** View your broadcasting configuration, including extension configurations. */
    USER_READ_BROADCAST = "user:read:broadcast",

    /** Read authorized user’s email address. */
    USER_READ_EMAIL = "user:read:email",

    /** Read whether a user is subscribed to your channel. */
    V5_CHANNEL_CHECK_SUBSCRIPTION = "channel_check_subscription",

    /** Trigger commercials on channel. */
    V5_CHANNEL_COMMERCIAL = "channel_commercial",

    /** Write channel metadata (game, status, etc). */
    V5_CHANNEL_EDITOR = "channel_editor",

    /** Add posts and reactions to a channel feed. */
    V5_CHANNEL_FEED_EDIT = "channel_feed_edit",

    /** View a channel feed. */
    V5_CHANNEL_FEED_READ = "channel_feed_read",

    /** Read nonpublic channel information, including email address and stream key. */
    V5_CHANNEL_READ = "channel_read",

    /** Reset a channel’s stream key. */
    V5_CHANNEL_STREAM = "channel_stream",

    /** Read all subscribers to your channel. */
    V5_CHANNEL_SUBSCRIPTIONS = "channel_subscriptions",

    /** (Deprecated — cannot be requested by new clients.) \nLog into chat and send messages. */
    V5_CHAT_LOGIN = "chat_login",

    /** Manage a user’s collections (of videos). */
    V5_COLLECTIONS_EDIT = "collections_edit",

    /** Manage a user’s communities. */
    V5_COMMUNITIES_EDIT = "communities_edit",

    /** Manage community moderators. */
    V5_COMMUNITIES_MODERATE = "communities_moderate",

    /** Use OpenID Connect authentication. */
    V5_OPENID = "openid",

    /** Turn on/off ignoring a user. Ignoring users means you cannot see them type, receive messages from them, etc. */
    V5_USER_BLOCKS_EDIT = "user_blocks_edit",

    /** Read a user’s list of ignored users. */
    V5_USER_BLOCKS_READ = "user_blocks_read",

    /** Manage a user’s followed channels. */
    V5_USER_FOLLOWS_EDIT = "user_follows_edit",

    /** Read nonpublic user information, like email address. */
    V5_USER_READ = "user_read",

    /** Read a user’s subscriptions. */
    V5_USER_SUBSCRIPTIONS = "user_subscriptions",

    /** Turn on Viewer Heartbeat Service ability to record user data. */
    V5_VIEWING_ACTIVITY_READ = "viewing_activity_read",

    /** Perform moderation actions in a channel. The user requesting the scope must be a moderator in the channel. */
    CHANNEL_MODERATE = "channel:moderate",

    /** Send live stream chat and rooms messages. */
    CHAT_EDIT = "chat:edit",

    /** View live stream chat and rooms messages. */
    CHAT_READ = "chat:read",

    /** View your whisper messages. */
    WHISPERS_READ = "whispers:read",

    /** Send whisper messages. */
    WHISPERS_EDIT = "whispers:edit",

}
