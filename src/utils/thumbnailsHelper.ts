import { Thumbnails } from "../types/Thumbnails/Thumbnails";
import { Video } from "../types/Video";

export const getThumbnailsUrl = (e: Thumbnails): string | undefined => {
    const screenWidth: number = window.innerWidth;

    console.log('eee', e);
    

    if (screenWidth >= 1280) {
        return e.maxres.url
    } else if (screenWidth >= 640) {
        return e.standard.url
    } else if (screenWidth >= 480) {
        return e.high.url
    } else if (screenWidth >= 320) {
        return e.medium.url
    } else {
        return e.default.url
    }
}