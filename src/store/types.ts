import { DataState } from './modules/data'
import { PlaylistItemsState } from './modules/playlist-items/state'
import { VideoState } from './modules/video-details/state'


export interface RootState {
    data: DataState
    playlistItem: PlaylistItemsState
    videoDetail: VideoState
}