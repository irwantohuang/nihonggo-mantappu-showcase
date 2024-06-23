import { findPlaylist } from "../repository/playlistItemRepository";
import { PlaylistItemRequest } from "../request/PlaylistItemRequest";
import { Video } from "../types/Video";

export const fetchAll = async (req: PlaylistItemRequest): Promise<Video[]> => {
    try {
        const resp: Video[] = await findPlaylist(req);
        return resp;
    } catch (error) {
        console.error('Error fetching all playlist items:', error);
        throw error; // Melemparkan error untuk ditangani di tempat lain
    }
}