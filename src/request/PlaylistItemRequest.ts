import { appConfig } from "../appConfig";

export interface PlaylistItemRequest {
    key: string,
    part: string[],
    type: string,
    channelId: string,
    playlistId: string,
    maxResults: Number,
}

export const initPlaylistItemRequest = (): PlaylistItemRequest => {
    return {
        key: '',
        part: [],
        type: '',
        channelId: '',
        playlistId: '',
        maxResults: 0
    }
}

export const assignPlaylistItemRequest = (part: string[], type: string, playlistId: string, maxResults: number ): PlaylistItemRequest => {
    return {
        key: appConfig.apiKey,
        part,
        type,
        channelId: appConfig.channelId,
        playlistId,
        maxResults
    }
}