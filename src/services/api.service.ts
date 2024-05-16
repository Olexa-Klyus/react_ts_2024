import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
});

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users");
    },

    getUserByUserId: async (userId: number): Promise<AxiosResponse<IUserModel>> => {
        return await axiosInstance.get(`/users/${userId}`);
    },

}

export {userApiService}