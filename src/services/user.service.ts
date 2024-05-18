import {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {apiService} from "./api.service";

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return apiService.get("/users");
    }
}
