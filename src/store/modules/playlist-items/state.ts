import { Video, initVideo } from "../../../types/Video";

export interface PlaylistItemsState {
    items: Video[]
}

export const state: PlaylistItemsState = {
    items: [initVideo()]
}