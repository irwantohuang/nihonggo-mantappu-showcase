import { findAll, findPartial } from "../repository/playlistItemRepository";
import { PlaylistItemRequest } from "../request/PlaylistItemRequest";
import { Pagination } from "../types/Pagination";
import { Video } from "../types/Video";

export const fetchAll = async (req: PlaylistItemRequest): Promise<Video[]> => {
    try {
        const resp: Video[] = await findAll(req);
        return resp;
    } catch (error) {
        console.error('[services] error fetch all playlist: ', error);
        throw error; 
    }
}

export const fetchPartial = async (req: PlaylistItemRequest, pageToken: string): Promise<Pagination> => {
    try {
        const response: Pagination = await findPartial(req, pageToken);
        return response;
    } catch (error) {
        console.log('[playlist-item services] error fetch partial ', error)
        throw error;
    }
}