import { ActionTree } from "vuex";
import { VideoState } from "./state";
import { RootState } from "../../types";
import { fetchAll } from "../../../services/videoService";
import { Video, assignVideoDetail } from "../../../types/Video";


export const actions: ActionTree<VideoState, RootState> = {
    getVideoDetails: async ({ commit }, {req, oldRes}) => {
        const result = await fetchAll(req)

        const res: Video[] = oldRes.map((old: Video) => {
            const newRes: Video | undefined = result.find(newVid => newVid.id == old.contentDetails.videoId)
            return assignVideoDetail(old, newRes)
        })
        commit("SET_VIDEO_DETAIL", res)
    }
}