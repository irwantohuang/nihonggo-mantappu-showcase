import { Thumbnails, assignThumbnails, initThumbnails } from "./Thumbnails/Thumbnails";

export interface Snippet {
    publishedAt: String,
    channelId: String,
    title: String,
    description: String,
    thumbnails: Thumbnails,
    channelTitle: String,
    playlistId: String,
}

export const initSnippet = (): Snippet => {
    return {
        publishedAt: '',
        channelId: '',
        title: '',
        description: '',
        thumbnails: initThumbnails(),
        channelTitle: '',
        playlistId: '',
    }
}

export const assignSnippet = (result: Snippet): Snippet => {
    const { publishedAt, channelId, title, description, thumbnails, channelTitle, playlistId } = result;

    return {
        publishedAt,
        channelId,
        title,
        description,
        thumbnails: assignThumbnails(thumbnails),
        channelTitle,
        playlistId
    }
}