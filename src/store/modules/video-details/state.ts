import { Pagination, initPagination } from "../../../types/Pagination";
import { Video, initVideo } from "../../../types/Video";

export interface VideoState { 
    items: Video[]
    mostWatch: Video[],
    pagination: Pagination,
    loading: boolean,
}

export const state: VideoState = {
    items: [initVideo()],
    mostWatch: [initVideo()],
    pagination: initPagination(),
    loading: false
}