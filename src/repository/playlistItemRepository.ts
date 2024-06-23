import api from "../boot/axios";
import { PlaylistItemRequest } from "../request/PlaylistItemRequest";
import { Video } from "../types/Video";

export const findPlaylist = async (req: PlaylistItemRequest): Promise<Video[]> => {
    try {
        const resp = await api.get(`/playlistItems`, {
            params: {
                key: req.key,
                part: req.part.join(','),
                type: req.type,
                channelId: req.channelId,
                playlistId: req.playlistId,
                maxResults: req.maxResults
            }
        });
        return resp.data.items; // Mengambil items dari data respons
    } catch (error) {
        console.error('Error fetching playlist items:', error);
        throw error; // Melemparkan error untuk ditangani di tempat lain
    }
}