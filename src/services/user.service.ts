import {IUserModel} from "../models/IUserModel";
import {apiService} from "./api.service";
import {IResponce} from "../types/responceType";
import {urls} from "../constants/urls";

const userApiService = {
    getAllUsers: (): IResponce<IUserModel[]> => apiService.get(urls.users)
}

export {
    userApiService
}