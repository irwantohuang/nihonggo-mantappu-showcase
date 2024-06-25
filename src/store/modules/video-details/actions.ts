import { ActionTree } from "vuex";
import { VideoState } from "./state";
import { RootState } from "../../types";
import { fetchAll, fetchMostWatch } from "../../../services/videoService";


export const actions: ActionTree<VideoState, RootState> = {
    getAllVideoDetails: async ({ commit }, payload ) => {
        const result = await fetchAll(payload.request, payload.playlist);
        commit('SET_VIDEO_DETAIL', result)
    },

    getMostWatchVideos: async ({ commit }) => {
        const result = await fetchMostWatch();
        commit('SET_MOST_WATCH_VIDEOS', result)
    }
}

