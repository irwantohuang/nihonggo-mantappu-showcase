import { ActionTree } from "vuex";
import { ChannelState } from "./state";
import { RootState } from "../../types";
import { ChannelRequest } from "../../../request/ChannelRequest";
import { fetchChannel } from "../../../services/channelService";
import { Channel, assignChannel } from "../../../types/Channel";

export const actions: ActionTree<ChannelState, RootState> = {
    getChannel: async({ commit }, request: ChannelRequest) => {
        const result = await fetchChannel(request)
        const res: Channel = assignChannel(result);
        commit("SET_CHANNEL", res)
    }
}