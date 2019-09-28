
export interface User {

    /** User’s broadcaster type: "partner", "affiliate", or "". */
    broadcaster_type: "partner" | "affiliate" | "";

    /** User’s channel description. */
    description: string;

    /** User’s display name. */
    display_name: string;

    /** User’s email address. Returned if the request includes the user:read:email scope. */
    email: string;

    /** User’s ID. */
    id: string;

    /** User’s login name. */
    login: string;

    /** URL of the user’s offline image. */
    offline_image_url: string;

    /** URL of the user’s profile image. */
    profile_image_url: string;

    /** User’s type: "staff", "admin", "global_mod", or "". */
    type: "staff" | "admin" | "global_mod" | "";

    /** Total number of views of the user’s channel. */
    view_count: number;

}
