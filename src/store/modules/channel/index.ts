import { Module } from "vuex";
import { ChannelState, state } from "./state";
import { RootState } from "../../types";
import { actions } from "./actions";
import { mutations } from "./mutations";

export const channel: Module<ChannelState, RootState> = {
    namespaced: true,
    state,
    actions,
    mutations
}