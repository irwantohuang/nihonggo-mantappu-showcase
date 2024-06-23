import { assignVideoRequest } from "../request/VideoRequest";
import { store } from "../store/store"
import { Video } from "../types/Video";


export const helpFetchVideo = (oldRes: Video[]) => {
    const id = oldRes.map(v => v.contentDetails.videoId);
    const req = assignVideoRequest(['snippet', 'contentDetails', 'statistics'], id);
    store.dispatch('videoDetail/getVideoDetails', { req, oldRes })
}