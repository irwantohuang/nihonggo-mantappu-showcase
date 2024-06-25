import { MutationTree } from "vuex";
import { ChannelState } from "./state";

export const mutations: MutationTree<ChannelState> = {
    SET_CHANNEL(state, result) {
        state.items = result;
    }
}