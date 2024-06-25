import { Video, initVideo } from "../../../types/Video";

export interface VideoState { 
    items: Video[]
    mostWatch: Video[],
}

export const state: VideoState = {
    items: [initVideo()],
    mostWatch: [initVideo()]
}