import { Pagination, initPagination } from "../../../types/Pagination";
import { Video, initVideo } from "../../../types/Video";

export interface PlaylistItemsState {
    allItems: Video[],
    items: Pagination
}

export const state: PlaylistItemsState = {
    allItems: [initVideo()],
    items: initPagination(),
}