import { Channel, initChannel } from "../../../types/Channel";

export interface ChannelState {
    items: Channel
}

export const state: ChannelState = {
    items: initChannel()
}