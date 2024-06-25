import { ActionTree } from "vuex";
import { PlaylistItemsState } from "./state";
import { RootState } from "../../types";
import { fetchAll, fetchPartial } from "../../../services/playlistItemService";
import { PlaylistItemRequest } from "../../../request/PlaylistItemRequest";
import { Video, assignVideo } from "../../../types/Video";
import { Pagination, assignPagination } from "../../../types/Pagination";

export const actions: ActionTree<PlaylistItemsState, RootState> = {
    getAllPlaylistItems: async ({ commit }, req: PlaylistItemRequest) => {
        const result = await fetchAll(req);
        const res: Video[] = result.map(video => assignVideo(video));
        commit("SET_ALL_PLAYLIST_ITEMS", res);
    },

    getPlaylistItems: async ({ commit }, payload) => {
        const result = await fetchPartial(payload.request, payload.pageToken);
        const video: Video[] = result?.items?.map(video => assignVideo(video));
        const res: Pagination = assignPagination(result.nextPageToken, video);
        commit("SET_PLAYLIST_ITEMS", res)
        
    }
}