import { ActionTree } from "vuex";
import { ModalState } from "./state";
import { RootState } from "../../types";

export const actions: ActionTree<ModalState, RootState> = {
    handleBaseOverlay: (context, payload) => {
        const action: boolean = payload === 'open' ? true : false
        context.commit('SET_BASE_OVERLAY', action)
    }
}