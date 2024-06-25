import api from "../boot/axios";
import { PlaylistItemRequest } from "../request/PlaylistItemRequest";
import { Video } from "../types/Video";

export const findAll = async (req: PlaylistItemRequest): Promise<Video[]> => {
    try {
        let nextPageToken: string | undefined = undefined;
        let allData: any = [];
        do {
            const resp:any = await api.get(`/playlistItems`, {
                params: {
                    key: req.key,
                    part: req.part.join(','),
                    type: req.type,
                    channelId: req.channelId,
                    pageToken: nextPageToken,
                    playlistId: req.playlistId,
                    maxResults: req.maxResults
                }
            });

            const { items, nextPageToken: newPageToken } = resp.data;
            allData = [...allData, ...items];
            nextPageToken = newPageToken;
        } while (nextPageToken)
            
        return allData;
    } catch (error) {
        console.error('[repository] error get all playlist', error);
        throw error; 
    }
}