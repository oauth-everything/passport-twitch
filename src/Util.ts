import { User } from "./ApiData";
import { ProfileItem } from "@oauth-everything/profile";

export function buildPhotos(json: User): ProfileItem[] {

    const photos: ProfileItem[] = [];

    if(json.profile_image_url) {
        photos.push({
            value: json.profile_image_url,
            type: "profile"
        });
    }
    if(json.offline_image_url) {
        photos.push({
            value: json.offline_image_url,
            type: "stream_offline"
        });
    }

    return photos;

}
