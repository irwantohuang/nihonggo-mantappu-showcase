import { ActionTree } from "vuex";
import { VideoState } from "./state";
import { RootState } from "../../types";
import { fetchAll, fetchMostWatch, fetchPaginationVideo, fetchPartial } from "../../../services/videoService";
import { videoRequest } from "../../../utils/fetchHelper";


export const actions: ActionTree<VideoState, RootState> = {
    getAllVideoDetails: async ({ commit }, payload ) => {
        const result = await fetchAll(payload.request, payload.playlist);
        commit('SET_VIDEO_DETAIL', result)
    },

    getMostWatchVideos: async ({ commit }) => {
        const result = await fetchMostWatch();
        commit('SET_MOST_WATCH_VIDEOS', result)
    },

    getPaginationVideo: async ({ commit, state }) => {
        const playlist = await fetchPaginationVideo();

        const videoIds = playlist.items.map(v => v.contentDetails.videoId)
        const request = videoRequest(videoIds);
        const result = await fetchPartial(request, playlist);

        const current = state.pagination;
        if (current.items.length === 1) commit("SET_VIDEO", result)
        else commit("ADD_VIDEO", result)
    }
}

