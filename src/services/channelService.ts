import { getById } from "../repository/ChannelRepository";
import { ChannelRequest } from "../request/ChannelRequest"
import { Channel } from "../types/Channel";

export const fetchChannel = async (request: ChannelRequest): Promise<Channel> => {
    try {
        const resp: Channel = await getById(request);
        return resp;
    } catch (error) {
        console.log('[service] error fetch channel ', error);
        throw error;
        
    }
}