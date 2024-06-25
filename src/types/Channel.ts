import { ChannelStatistics, assignChannelStatistice, initChannelStatistics } from "./ChannelStatistics"

export interface Channel {
    id: string,
    title: string,
    description: string,
    url: string,
    publishedAt: string,
    profilePicture: string,
    statistics: ChannelStatistics
}

export const initChannel = (): Channel => {
    return {
        id: '',
        title: '',
        description: '',
        url: '',
        publishedAt: '',
        profilePicture: '',
        statistics: initChannelStatistics()
    }
}

export const assignChannel = (result: any): Channel => {
    return {
        id: result[0].id,
        title: result[0].snippet.title,
        description: result[0].snippet.description,
        url: result[0].snippet.customUrl,
        publishedAt: result[0].snippet.publishedAt,
        profilePicture: result[0].snippet.thumbnails.high.url,
        statistics: assignChannelStatistice(result[0].statistics)
    }
}