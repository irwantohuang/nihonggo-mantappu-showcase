import api from "../boot/axios";
import { VideoRequest } from "../request/VideoRequest";
import { Pagination } from "../types/Pagination";
import { Video } from "../types/Video";

export const findVideo = async (req: VideoRequest): Promise<Video[]> => {
    try {
        const resp = await api('/videos', {
            params: {
                key: req.key,
                part: req.part.join(','),
                id: req.id.join(',')
            }
        })
        return resp.data.items;
    } catch (error) {
        console.log('error video repository ', error);
        throw error;
    }
}


export const findVideoPartial = async (req: VideoRequest): Promise<Pagination> => {
    console.log('video repo, find partial ', req)
    try {
        const resp = await api('/videos', {
            params: {
                key: req.key,
                part: req.part.join(','),
                id: req.id.join(',')
            }
        })
        return resp.data;
    } catch (error) {
        console.log('error video repository ', error);
        throw error;
    }
}