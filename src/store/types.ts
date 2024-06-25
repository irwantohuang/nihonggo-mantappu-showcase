import { ChannelState } from './modules/channel/state'
import { DataState } from './modules/data'
import { ModalState } from './modules/modal-overlay/state'
import { PlaylistItemsState } from './modules/playlist-items/state'
import { VideoState } from './modules/video-details/state'


export interface RootState {
    data: DataState
    playlistItem: PlaylistItemsState
    videoDetail: VideoState
    modalOverlay: ModalState
    channel: ChannelState
}