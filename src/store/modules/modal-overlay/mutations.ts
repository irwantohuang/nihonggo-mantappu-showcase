import { MutationTree } from "vuex";
import { ModalState } from "./state";

export const mutations: MutationTree<ModalState> = {
    SET_BASE_OVERLAY(state, result) {
        state.base = result;
        document.body.style.overflow = result ? 'hidden' : 'auto'
    }
}