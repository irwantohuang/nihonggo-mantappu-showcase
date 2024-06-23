import { Video, initVideo } from "../../../types/Video";

export interface VideoState { 
    items: Video[]
}

export const state: VideoState = {
    items: [initVideo()]
}