import { ActionTree, Module, MutationTree } from "vuex";
import { Data, initData } from "../../types/Data";
import { RootState } from "../types";

export interface DataState {
    data: Data
}

const state: DataState = {
    data: initData()
}

const mutations: MutationTree<DataState> = {
    INCREASE_AGE(state) {
        state.data.age = state.data.age + 1;
    }
}

const actions: ActionTree<DataState, RootState> = {

    increaseAge: ({ commit }) => {
        commit('INCREASE_AGE', 1);
    }

}


export const data: Module<DataState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}