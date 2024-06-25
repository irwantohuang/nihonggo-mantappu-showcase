import { findVideo, findVideoPartial } from "../repository/videoRepository";
import { VideoRequest } from "../request/VideoRequest";
import { store } from "../store/store";
import { Pagination, assignPagination } from "../types/Pagination";
import { Video, assignVideoDetail } from "../types/Video";
import { helpFetchAllPlaylist, helpFetchPlaylist, helpFetchAllVideo } from "../utils/fetchHelper";

export const fetchAll = async (request: VideoRequest, playlist: Video[]): Promise<Video[]> => {
    try {
        const response: Video[] = await findVideo(request);

        const result: Video[] = playlist.map((p: Video) => {
            const mapping: Video | undefined = response.find(vid => vid.id == p.contentDetails.videoId)
            return assignVideoDetail(p, mapping);
        })

        return result;
    } catch (error) {
        console.log('[serives] error fetch all video : ', error);
        throw error;
    }
} 

export const fetchPartial = async (request: VideoRequest, playlist: Pagination): Promise<Pagination> => {
    try {
        const response: Pagination = await findVideoPartial(request);

        const video: Video[] = playlist.items.map((p: Video) => {
            const mapping: Video | undefined = response.items.find(vid => vid.id === p.contentDetails.videoId)
            return assignVideoDetail(p, mapping);
        })
        const result = assignPagination(playlist.nextPageToken, video);
        return result;
    } catch (error) {
        console.log('[video service error] ', error)
        throw error;
    }
}

export const fetchMostWatch = async () => {
    await helpFetchAllPlaylist(50);
    const playlist = store.state.playlistItem.allItems;

    let video: Video[] = [];
    for ( let i = 0; i < playlist.length; i += 50 ) {
        const chunks = playlist.slice(i, i + 50)
        await helpFetchAllVideo(chunks);
        video = video.concat(store.state.videoDetail.items);
    }

    const sort = video.sort((a, b) => {
        return b.contentDetails.viewCount - a.contentDetails.viewCount;
    })

    store.commit('videoDetail/CLEAR_ITEM')
    store.commit('playlistItem/CLEAR_ITEM')

    return sort.slice(0, 10)
}


export const fetchPaginationVideo = async () => {
    const pageToken = store.state.videoDetail.pagination.nextPageToken;
    await helpFetchPlaylist(6, pageToken);
    const playlist = store.state.playlistItem.items;

    return playlist
}