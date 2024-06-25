import { assignPlaylistItemRequest } from "../request/PlaylistItemRequest";
import { assignVideoRequest } from "../request/VideoRequest";
import { store } from "../store/store"
import { Video } from "../types/Video";


const playlistRequest = (maxResults: number) => {
    return assignPlaylistItemRequest(
        ['snippet', 'contentDetails'],
        'video',
        'PLXE8AUnn_XpX59_DocpuX5e2d9tG1pY5D',
        maxResults
    )
}

export const videoRequest = (videoId: string[]) => {
    return assignVideoRequest(
        ['snippet', 'contentDetails', 'statistics'], videoId
    );
}

export const helpFetchAllPlaylist = async (maxResults: number) => {
    const request = playlistRequest(maxResults);
    await store.dispatch('playlistItem/getAllPlaylistItems', request)
}

export const helpFetchPlaylist = async (maxResults: number, pageToken: string | '') => {
    const request = playlistRequest(maxResults);
    await store.dispatch('playlistItem/getPlaylistItems', {request, pageToken});
}

export const helpFetchAllVideo = async (playlist: Video[]) => {
    const videoId = playlist.map(video => video.contentDetails.videoId)
    const request = videoRequest(videoId);
    await store.dispatch('videoDetail/getAllVideoDetails', {request, playlist})
}