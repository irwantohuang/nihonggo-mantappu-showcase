import { findVideo } from "../repository/videoRepository";
import { VideoRequest } from "../request/VideoRequest";
import { store } from "../store/store";
import { Video, assignVideoDetail } from "../types/Video";
import { helpFetchAllPlaylist, helpFetchAllVideo } from "../utils/fetchHelper";

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

export const fetchMostWatch = async () => {
    await helpFetchAllPlaylist(50);
    const playlist = store.state.playlistItem.items;

    let video: Video[] = [];
    for ( let i = 0; i < playlist.length; i += 50 ) {
        const chunks = playlist.slice(i, i + 50)
        await helpFetchAllVideo(chunks);
        video = video.concat(store.state.videoDetail.items);
    }

    const sort = video.sort((a, b) => {
        return b.contentDetails.viewCount - a.contentDetails.viewCount;
    })

    return sort.slice(0, 10)
}