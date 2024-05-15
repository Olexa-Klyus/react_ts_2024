import axios, {AxiosResponse} from "axios";
import {IFormModel} from "../models/IFormModel";
import {IPostModel} from "../models/IPostModel";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const postService = {
    getAllPosts: () => {
        return axiosInstance.get('/posts')
    },

    savePost: ({title, body, userId}: IFormModel):Promise<AxiosResponse<IPostModel>> => {

        return axiosInstance.post(
            `/posts`,
            {body, title, userId},
            {headers: {'Content-type': 'application/json; charset=UTF-8',}}
        )
    }
}

export {postService}