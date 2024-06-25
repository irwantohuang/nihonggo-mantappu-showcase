import { Video, initVideo } from "./Video";

export interface Pagination {
    nextPageToken: string,
    items: Video[]
}

export const initPagination = (): Pagination => {
    return {
        nextPageToken: '',
        items: [initVideo()]
    }
}

export const assignPagination = (pageToken: string, video: Video[]): Pagination => {
    return {
        nextPageToken: pageToken,
        items: video,
    }
}