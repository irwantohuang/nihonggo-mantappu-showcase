import { store } from "../store/store"

export const handleBaseOverlay = (type: string) => {
    store.dispatch('modalOverlay/handleBaseOverlay', type);
}