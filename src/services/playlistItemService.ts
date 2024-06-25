import { findAll } from "../repository/playlistItemRepository";
import { PlaylistItemRequest } from "../request/PlaylistItemRequest";
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