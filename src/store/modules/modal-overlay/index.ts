import { Module } from "vuex";
import { ModalState, state } from "./state";
import { RootState } from "../../types";
import { actions } from "./actions";
import { mutations } from "./mutations";


export const modalOverlay: Module<ModalState, RootState> = {
    namespaced: true,
    state,
    actions, 
    mutations
}