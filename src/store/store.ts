import { createStore } from "vuex";
import { RootState } from "./types";
import { data } from "./modules/data";
import { playlistItem } from './modules/playlist-items/index'
import { videoDetail } from "./modules/video-details/index";

export const store = createStore<RootState> ({
    modules: {
        data,
        videoDetail,
        playlistItem,
    }
})