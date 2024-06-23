import { ContentDetails, assignContentDetails, assignId, initContentDetails } from "./ContentDetails";
import { Snippet, assignSnippet, initSnippet } from "./Snippet";

export interface Video {
    id: String,
    snippet: Snippet,
    contentDetails: ContentDetails
}

export const initVideo = (): Video => {
    return {
        id: '',
        snippet: initSnippet(),
        contentDetails: initContentDetails(),
    }
}

export const assignVideo = (result: any): Video => {
    const { id, snippet } = result;
    return {
        id, 
        snippet: assignSnippet(snippet),
        contentDetails: assignId(result.contentDetails.videoId)
    }
}

export const assignVideoDetail = (oldRes: Video, newRes: Video | undefined): Video => {
    const {id, snippet, contentDetails} = oldRes;
    return {
        id, 
        snippet,
        contentDetails: assignContentDetails(contentDetails, newRes)
    }
}