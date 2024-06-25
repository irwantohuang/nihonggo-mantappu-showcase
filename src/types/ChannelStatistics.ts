export interface ChannelStatistics {
    views: number,
    subscribers: number,
    video: number,
}

export const initChannelStatistics = (): ChannelStatistics => {
    return {
        views: 0,
        subscribers: 0,
        video: 0,
    }
}

export const assignChannelStatistice = (statistics: any): ChannelStatistics => {
    const { viewCount, subscriberCount, videoCount } = statistics;
    return {
        views: viewCount,
        subscribers: subscriberCount,
        video: videoCount
    }
}