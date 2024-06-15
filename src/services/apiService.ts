import axios from "axios";
import {IPost, IUser} from "../models";
import {baseURL, urls} from "../constants";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {}
})

const userService = {
    getAll: async () => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: string) => {
        const response = await axiosInstance.get<IUser>(urls.users.byId(+id));
        return response.data;
    }
}


const postService = {
    getAll: async () => {
        const response = await axiosInstance.get<IPost[]>(urls.posts.base);
        return response.data;
    }
}

export {
    userService,
    postService
}