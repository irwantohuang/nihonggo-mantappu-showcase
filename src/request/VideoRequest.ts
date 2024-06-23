import { appConfig } from "../appConfig"

export interface VideoRequest {
    key: string,
    part: string[],
    id: string[]
}

export const assignVideoRequest = (part: string[], id: string[]): VideoRequest => {
    return {
        key: appConfig.apiKey,
        part: part,
        id: id
    }
}