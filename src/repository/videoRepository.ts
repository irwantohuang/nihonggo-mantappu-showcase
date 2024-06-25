import api from "../boot/axios";
import { VideoRequest } from "../request/VideoRequest";
import { store } from "../store/store";
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
    store.commit("videoDetail/SET_LOADING", true)
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
    } finally {
        store.commit("videoDetail/SET_LOADING", false)
    }
}