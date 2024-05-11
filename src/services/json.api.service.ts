import axios, {AxiosResponse} from "axios";
import {PostModel} from "../models/PostModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

// let requests = {
//     posts: {
//         getAllPosts: () => {
//             return axiosInstance.get('/posts');
//         }
//     }
// }
// export {requests}


const getAllPosts = ():Promise<AxiosResponse<PostModel[]>> => {
    return axiosInstance.get('/posts');
}


export {getAllPosts}