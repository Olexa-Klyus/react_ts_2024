import axios, {AxiosResponse} from "axios";
import {IFormModel} from "../models/IFormModel";
import {IPostModel} from "../models/IPostModel";


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8',}
});


//можна перехорити і додати щось до запиту, наприклад хедер,або токен
axiosInstance.interceptors.request.use((request => {

    console.log(request)
    return request

}))

const postService = {
    getAllPosts: () => {
        return axiosInstance.get('/posts')
    },

    savePost: ({title, body, userId}: IFormModel): Promise<AxiosResponse<IPostModel>> => {

        return axiosInstance.post(
            `/posts`,
            {body, title, userId}
        )
    }
}


export {postService}