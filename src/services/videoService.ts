import { findVideo } from "../repository/videoRepository";
import { VideoRequest } from "../request/VideoRequest";
import { Video } from "../types/Video";

export const fetchAll = async (req: VideoRequest): Promise<Video[]> => {
    try {
        const resp: Video[] = await findVideo(req);
        return resp;
    } catch (error) {
        console.log('video service error ', error);
        throw error;
    }
} 