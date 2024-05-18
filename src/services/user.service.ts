import {IUserModel} from "../models/IUserModel";
import {axiosInstance} from "./api.service";
import {IResponceType} from "../types/responceType";
import {urls} from "../constants/urls";


const userApiService = {
    getAllUsers: (): IResponceType<IUserModel[]> => {
        return (axiosInstance.get(urls.users))
    },
    //
    // getUserByUserId: async (userId: number): Promise<AxiosResponse<IUserModel>> => {
    //     return await axiosInstance.get(`/users/${userId}`);
    // },

}

export {userApiService}