import api from "../boot/axios";
import { ChannelRequest } from "../request/ChannelRequest";
import { Channel } from "../types/Channel";

export const getById = async (request: ChannelRequest): Promise<Channel> => {
    try {
        const resp = await api('/channels', {
            params: {
                key: request.key,
                part: request.part.join(','),
                id: request.id
            }
        });
        return resp.data.items;
    } catch (error) {
        console.log('[repository] error get channel by id : ', error);
        throw error;
    }
}