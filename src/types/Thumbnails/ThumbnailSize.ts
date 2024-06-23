export interface ThumbnailSize {
    url: string,
    width: Number,
    height: Number
}

export const initThumbnailSize = (): ThumbnailSize => {
    return {
        url: '',
        width: 0,
        height: 0
    }
}

export const assignThumbnailSize = (result: ThumbnailSize): ThumbnailSize => {
    const { url, width, height } = result;
    return {
        url,
        width,
        height
    }
}