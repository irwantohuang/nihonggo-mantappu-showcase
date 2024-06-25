import { format, formatDistanceToNow } from "date-fns";
import numeral from "numeral";

export const convertToMMSS = (durationISO: string): string | undefined => {
    if (durationISO) {
        const match = durationISO.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        if (!match) return '';
        const timeParts = match.slice(1).map(x => x ? x.replace(/\D/, '') : '0')
        const minutes = (parseInt(timeParts[1]) || 0);
        const seconds = (parseInt(timeParts[2]) || 0);
        return `${minutes}:${seconds}`
    }
}

export const formatNumeral = (viewCount: number): string => {
    return numeral(viewCount).format('0.[0]a').toUpperCase();
}

export const formatTimeAgo = (publishedAt: string): string => {
    if (publishedAt) {
        console.log('pub', publishedAt);
        
        const date = new Date(publishedAt);
        const formatted = formatDistanceToNow(date, { addSuffix: true })
        console.log('pub', formatted);

        const splitText = formatted.split(' ')
        const filterText = splitText.filter(word => word !== 'about');
        
        return `Posted ${filterText.join(' ')}`
    } else return '';
}

export const formatDate = (publishedAt: string): string => {
    if (publishedAt) {
        return format(new Date(publishedAt), 'yyyy-MM-dd')
    } else return '';
}


export const formatDescription = (desc: string): string[] => {
    if (desc) {
        const withLink = desc.replace(
            /https:\/\/\S+/g,
            '<a href="$&" target="_blank" class="text-blue-500">$&</a>'
        );
    
        let parts = withLink.split(/\n\n/);
        for (let i = 0; i < parts.length; i++) {
            parts[i] = parts[i].replace(
                /(<\/a>|\bPartnership:\s+.*?\(\+\d+\)|\bTokopedia:)\s*/g,
                '$1<br>'
            );
        }
    
        return parts;
    } else return [''];
}