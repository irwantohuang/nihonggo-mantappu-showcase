import { ThumbnailSize, assignThumbnailSize, initThumbnailSize } from "./ThumbnailSize";

export interface Thumbnails {
    default: ThumbnailSize,
    medium: ThumbnailSize,
    high: ThumbnailSize,
    standard: ThumbnailSize,
    maxres: ThumbnailSize
}

export const initThumbnails = (): Thumbnails => {
    return {
        default: initThumbnailSize(),
        medium: initThumbnailSize(),
        high: initThumbnailSize(),
        standard: initThumbnailSize(),
        maxres: initThumbnailSize(),
    }
}

export const assignThumbnails = (result: Thumbnails): Thumbnails => {
    const { default: defaultThumbnail, medium, high, standard, maxres } = result;

    return {
        default: assignThumbnailSize(defaultThumbnail),
        medium: assignThumbnailSize(medium),
        high: assignThumbnailSize(high),
        standard: assignThumbnailSize(standard),
        maxres: assignThumbnailSize(maxres),
    }
}