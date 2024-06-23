import { Module } from "vuex";
import { PlaylistItemsState, state } from "./state";
import { RootState } from "../../types";
import { mutations } from "./mutations";
import { actions } from "./actions";


export const playlistItem: Module<PlaylistItemsState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}