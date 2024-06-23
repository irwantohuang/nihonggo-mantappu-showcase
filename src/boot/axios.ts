import axios from "axios";
import { appConfig } from "../appConfig";

const api = axios.create({
    baseURL: appConfig.baseUrl
})

// api.interceptors.request.use(
//     (config) => {
//         console.log('testing', config);
//         return 'hello world'
//     }
// )

export default api;