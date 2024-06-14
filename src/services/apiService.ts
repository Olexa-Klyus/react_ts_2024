import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IPost, IUser} from "../models";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

const userService = {
    getAll: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get <IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: string): Promise<IUser> => {
        const response = await axiosInstance.get<IUser>(urls.users.byId(+id));
        return response.data;
    }
}

const postService = {
    getAll: async (): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getPostsByUserId: async (id: string): Promise<IPost[]> => {
        const response = await axiosInstance.get<IPost[]>(urls.users.postsByUserId(+id));
        return response.data;
    }
}
export {
    userService,
    postService
}