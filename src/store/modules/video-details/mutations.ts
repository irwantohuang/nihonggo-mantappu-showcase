import { MutationTree } from "vuex";
import { VideoState } from "./state";
import { initVideo } from "../../../types/Video";

export const mutations: MutationTree<VideoState> = {

    SET_VIDEO_DETAIL(state, result) {
        state.items = result;
    },

    CLEAR_ITEM(state) {
        state.items = [initVideo()];
    },

    SET_MOST_WATCH_VIDEOS(state, result) {
        state.mostWatch = result;
    },

    ADD_VIDEO(state, result) {
        state.pagination.nextPageToken = result.nextPageToken;
        state.pagination.items = [...state.pagination.items, ...result.items]
    },

    SET_VIDEO(state, result) {
        state.pagination = result;
    },

    SET_LOADING(state, payload) {
        state.loading = payload;
    }

}