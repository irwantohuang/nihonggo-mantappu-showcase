import { ActionTree } from "vuex";
import { PlaylistItemsState } from "./state";
import { RootState } from "../../types";
import { fetchAll } from "../../../services/playlistItemService";
import { PlaylistItemRequest } from "../../../request/PlaylistItemRequest";
import { Video, assignVideo } from "../../../types/Video";
import { helpFetchVideo } from "../../../utils/fetchHelper";

export const actions: ActionTree<PlaylistItemsState, RootState> = {
    getAllPlaylistItems: async ({ commit }, req: PlaylistItemRequest) => {
        const result = await fetchAll(req);
        const res: Video[] = result.map(video => assignVideo(video));
        helpFetchVideo(res);
        commit("SET_PLAYLIST_ITEMS", res);   
    },
}