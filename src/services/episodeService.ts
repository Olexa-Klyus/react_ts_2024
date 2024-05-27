import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService = {
    getAll: (page:string) => apiService.get(urls.episode, {params: {page}})
}

export {
    episodeService
}