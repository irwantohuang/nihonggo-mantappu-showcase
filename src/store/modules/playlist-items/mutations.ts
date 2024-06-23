import { MutationTree } from "vuex";
import { PlaylistItemsState } from "./state";


export const mutations: MutationTree<PlaylistItemsState> = {
    SET_PLAYLIST_ITEMS(state, result) {
        state.items = result;
    }
}