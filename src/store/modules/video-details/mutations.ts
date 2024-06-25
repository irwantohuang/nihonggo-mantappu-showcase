import { MutationTree } from "vuex";
import { VideoState } from "./state";

export const mutations: MutationTree<VideoState> = {

    SET_VIDEO_DETAIL(state, result) {
        state.items = result;
    },

    SET_MOST_WATCH_VIDEOS(state, result) {
        state.mostWatch = result;
    }

}