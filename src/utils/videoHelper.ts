import { format, formatDistanceToNow } from "date-fns";
import numeral from "numeral";

export const convertToMMSS = (durationISO: string): string | undefined => {
    const match = durationISO.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return undefined;
    const timeParts = match.slice(1).map(x => x ? x.replace(/\D/, '') : '0')
    const minutes = (parseInt(timeParts[1]) || 0);
    const seconds = (parseInt(timeParts[2]) || 0);
    return `${minutes}:${seconds}`
}

export const formatView = (viewCount: number): string => {
    return numeral(viewCount).format('0.[0]a').toUpperCase() + ' Views';
}

export const formatTimeAgo = (publishedAt: string): string => {
    if (publishedAt) {
        const date = new Date(publishedAt);
        return formatDistanceToNow(date, { addSuffix: true })
    } else return '';
}

export const formatDate = (publishedAt: string): string => {
    if (publishedAt) {
        return format(new Date(publishedAt), 'yyyy-MM-dd')
    } else return '';
}