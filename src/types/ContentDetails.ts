export interface ContentDetails {
    videoId: string,
    videoDuration: string,
    viewCount: number,
    likeCount: number,
    favoriteCount: number,
    commentCount: number,
}

export const initContentDetails = (): ContentDetails => {
    return {
        videoId: '',
        videoDuration: '',
        viewCount: 0,
        likeCount: 0,
        favoriteCount: 0,
        commentCount: 0,
    }
}

export const assignId = (id: string): any => {
    return {
        videoId: id
    }
}

export const assignContentDetails = (res: ContentDetails, video: any): ContentDetails => {
    const { viewCount, likeCount, favoriteCount, commentCount } = video.statistics;
    return {
        videoId: res.videoId,
        videoDuration: video.contentDetails.duration,
        viewCount,
        likeCount,
        favoriteCount,
        commentCount,
    }
}