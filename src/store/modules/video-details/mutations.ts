import { MutationTree } from "vuex";
import { VideoState } from "./state";

export const mutations: MutationTree<VideoState> = {

    SET_VIDEO_DETAIL(state, result) {
        state.items = result;
    }

}