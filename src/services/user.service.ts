import {IUserModel} from "../models/IUserModel";
import {apiService} from "./api.service";
import {IResponce} from "../types/responceType";
import {urls} from "../constants/urls";
import {AxiosResponse} from "axios";


const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return apiService.get("/users")
    },
}


export {
    userApiService
}