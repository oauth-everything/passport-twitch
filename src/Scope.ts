export enum Scope {

    /** View analytics data for the Twitch Extensions owned by the authenticated account. */
    ANALYTICS_READ_EXTENSIONS = "analytics:read:extensions",

    /** View analytics data for the games owned by the authenticated account. */
    ANALYTICS_READ_GAMES = "analytics:read:games",

    /** View Bits information for a channel. */
    BITS_READ = "bits:read",

    /** Run commercials on a channel. */
    CHANNEL_EDIT_COMMERCIAL = "channel:edit:commercial",

    /** Manage a channel’s broadcast configuration, including updating channel configuration and managing stream markers and stream tags. */
    CHANNEL_MANAGE_BROADCAST = "channel:manage:broadcast",

    /** Read charity campaign details and user donations on your channel. */
    CHANNEL_READ_CHARITY = "channel:read:charity",

    /** Manage a channel’s Extension configuration, including activating Extensions. */
    CHANNEL_MANAGE_EXTENSIONS = "channel:manage:extensions",

    /** Add or remove the moderator role from users in your channel. */
    CHANNEL_MANAGE_MODERATORS = "channel:manage:moderators",

    /** Manage a channel’s polls. */
    CHANNEL_MANAGE_POLLS = "channel:manage:polls",

    /** Manage of channel’s Channel Points Predictions */
    CHANNEL_MANAGE_PREDICTIONS = "channel:manage:predictions",

    /** Manage a channel raiding another channel. */
    CHANNEL_MANAGE_RAIDS = "channel:manage:raids",

    /** Manage Channel Points custom rewards and their redemptions on a channel. */
    CHANNEL_MANAGE_REDEMPTIONS = "channel:manage:redemptions",

    /** Manage a channel’s stream schedule. */
    CHANNEL_MANAGE_SCHEDULE = "channel:manage:schedule",

    /** Manage a channel’s videos, including deleting videos. */
    CHANNEL_MANAGE_VIDEOS = "channel:manage:videos",

    /** View a list of users with the editor role for a channel. */
    CHANNEL_READ_EDITORS = "channel:read:editors",

    /** View Creator Goals for a channel. */
    CHANNEL_READ_GOALS = "channel:read:goals",

    /** View Hype Train information for a channel. */
    CHANNEL_READ_HYPE_TRAIN = "channel:read:hype_train",

    /** View a channel’s polls. */
    CHANNEL_READ_POLLS = "channel:read:polls",

    /** View a channel’s Channel Points Predictions. */
    CHANNEL_READ_PREDICTIONS = "channel:read:predictions",

    /** View Channel Points custom rewards and their redemptions on a channel. */
    CHANNEL_READ_REDEMPTIONS = "channel:read:redemptions",

    /** View an authorized user’s stream key. */
    CHANNEL_READ_STREAM_KEY = "channel:read:stream_key",

    /** View a list of all subscribers to a channel and check if a user is subscribed to a channel. */
    CHANNEL_READ_SUBSCRIPTIONS = "channel:read:subscriptions",

    /** Read the list of VIPs in your channel. */
    CHANNEL_READ_VIPS = "channel:read:vips",

    /** Add or remove the VIP role from users in your channel. */
    CHANNEL_MANAGE_VIPS = "channel:manage:vips",
    /** Manage Clips for a channel. */
    CLIPS_EDIT = "clips:edit",
    /** View a channel’s moderation data including Moderators, Bans, Timeouts, and Automod settings. */
    MODERATION_READ = "moderation:read",

    /** Send announcements in channels where you have the moderator role. */
    MODERATOR_MANAGE_ANNOUNCEMENTS = "moderator:manage:announcements",

    /** Manage messages held for review by AutoMod in channels where you are a moderator. */
    MODERATOR_MANAGE_AUTOMOD = "moderator:manage:automod",

    /** View a broadcaster’s AutoMod settings. */
    MODERATOR_READ_AUTOMOD_SETTINGS = "moderator:read:automod_settings",

    /** Manage a broadcaster’s AutoMod settings. */
    MODERATOR_MANAGE_AUTOMOD_SETTINGS = "moderator:manage:automod_settings",

    /** Ban and unban users. */
    MODERATOR_MANAGE_BANNED_USERS = "moderator:manage:banned_users",

    /** View a broadcaster’s list of blocked terms. */
    MODERATOR_READ_BLOCKED_TERMS = "moderator:read:blocked_terms",

    /** Manage a broadcaster’s list of blocked terms. */
    MODERATOR_MANAGE_BLOCKED_TERMS = "moderator:manage:blocked_terms",

    /** Delete chat messages in channels where you have the moderator role */
    MODERATOR_MANAGE_CHAT_MESSAGES = "moderator:manage:chat_messages",

    /** View a broadcaster’s chat room settings. */
    MODERATOR_READ_CHAT_SETTINGS = "moderator:read:chat_settings",

    /** Manage a broadcaster’s chat room settings. */
    MODERATOR_MANAGE_CHAT_SETTINGS = "moderator:manage:chat_settings",

    /** Manage a user object. */
    USER_EDIT = "user:edit",

    /** Deprecated. Was previously used for “Create User Follows” and “Delete User Follows.” See Deprecation of Create and Delete Follows API Endpoints. */
    USER_EDIT_FOLLOWS = "user:edit:follows",

    /** Manage the block list of a user. */
    USER_MANAGE_BLOCKED_USERS = "user:manage:blocked_users",

    /** View the block list of a user. */
    USER_READ_BLOCKED_USERS = "user:read:blocked_users",

    /** View a user’s broadcasting configuration, including Extension configurations. */
    USER_READ_BROADCAST = "user:read:broadcast",

    /** Update the color used for the user’s name in chat.Update User Chat Color */
    USER_MANAGE_CHAT_COLOR = "user:manage:chat_color",

    /** View a user’s email address. */
    USER_READ_EMAIL = "user:read:email",

    /** View the list of channels a user follows. */
    USER_READ_FOLLOWS = "user:read:follows",

    /** View if an authorized user is subscribed to specific channels. */
    USER_READ_SUBSCRIPTIONS = "user:read:subscriptions",

    /** Read whispers that you send and receive, and send whispers on your behalf. */
    USER_MANAGE_WHISPERS = "user:manage:whispers",

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
