import {IUserModel} from "../models/IUserModel";
import { axiosInstance} from "./api.service";
import {IResponce} from "../types/responceType";
import {urls} from "../constants/urls";
import axios from "axios";


// const userApiService = {
//     getAllUsers: (): IResponce<IUserModel[]> => {
//         return (axiosInstance.get(urls.users))
//     }
// }

const apiService=axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});
const userApiService = {
    getAllUsers: (): IResponce<IUserModel[]> => {
        return (axiosInstance.get(urls.users))
    }
}



export {
    userApiService
}