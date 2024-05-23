import {apiService} from "./apiService";
import {urls} from "../constants";

const caracterService = {
    getAll: (page: any) => (apiService.get(urls.characters, {params: {page}}))
}

export {
    caracterService
}