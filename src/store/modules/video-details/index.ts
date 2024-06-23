import { Module } from "vuex";
import { VideoState, state } from "./state";
import { RootState } from "../../types";
import { mutations } from "./mutations";
import { actions } from "./actions";


export const videoDetail: Module<VideoState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}