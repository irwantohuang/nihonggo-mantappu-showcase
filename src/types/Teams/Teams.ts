import { Biodata } from "./Biodata";
import { SocialMedia } from "./SocialMedia";

export interface Teams {
    id: number,
    name: string,
    description: string,
    image: string,
    socialMedia: SocialMedia
    biodata: Biodata
}