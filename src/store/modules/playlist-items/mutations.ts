import { MutationTree } from "vuex";
import { PlaylistItemsState } from "./state";
import { initVideo } from "../../../types/Video";


export const mutations: MutationTree<PlaylistItemsState> = {
    SET_ALL_PLAYLIST_ITEMS(state, result) {
        state.allItems = result;
    },

    CLEAR_ITEM(state) {
        state.allItems = [initVideo()]
    },

    SET_PLAYLIST_ITEMS(state, result) {
        state.items = result;
    }
}