import { appConfig } from "../appConfig"

export interface ChannelRequest {
    key: string,
    part: string[],
    id: string
}

export const assignChannelRequest = (): ChannelRequest => {
    return {
        key: appConfig.apiKey,
        part: ['snippet', 'statistics'],
        id: appConfig.channelId
    }
}